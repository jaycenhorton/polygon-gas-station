import {ThemeProvider, createTheme, Paper} from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import { NavBar, GasPrices, PriceTable, Calculator, Footer } from './Components';
import Context from './Context';
import { styled } from '@mui/material/styles';
import axios from 'axios';

interface gas {
  safeLow: number
  standard: number
  fast: number
  fastest: number
  price: number
}

const App = () => {
  const [dark, setDark] = useState<boolean>(false)
  const [gasData, setGasData] = useState<gas | any>({safeLow: 0, standard: 0, fast: 0, fastest: 0, price: 0})
  const [preset, setPreset] = useState<string>('custom')
  const [gasPrice, setGasPrice] = useState<number>(0)
  const [customGasPrice, setCustomGasPrice] = useState<number>(0)
  const [costMatic, setCostMatic] = useState<number>(0)
  const [costUSD, setCostUSD] = useState<number>(0)
  const gasUsed = useRef<any>()
  const gasPriceRef = useRef<any>()
  const customGasPriceRef = useRef<any>(null)
  useEffect(() => {
    customGasPriceRef.current.focus();
  });

  useEffect(() => {
    const fetchData = async() =>{
      await axios.get(`https://api.polygonscan.com/api?module=stats&action=maticprice&apikey=${process.env.REACT_APP_POLYGON_API_KEY}`)
      .then(async resp => {
        await axios.get('https://gasstation-mainnet.matic.network')
        .then(res =>{
          let data: gas = {
            safeLow: res.data.safeLow,
            standard: res.data.standard,
            fast: res.data.fast,
            fastest: res.data.fastest,
            price: parseFloat(resp.data.result.maticusd)
          }
          setGasData(data)
          document.title = `${Math.ceil(res.data.fastest)} - ${Math.ceil(res.data.standard)} Gwei`
        })
        .catch(err => {
          console.log(err)
        })
      })
      .catch(err => {
        console.log(err)
      })

    }
    fetchData()
    const interval = setInterval(() =>{
      fetchData()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const th = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Poppins"',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      mode: dark ? 'dark':'light',
      primary: {
        main: '#8247E5'
      }
    }
  });

  const Background = styled(Paper)(({theme}) => ({
    margin: 0,
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#FFFFFF',
  }))

  return (
    <Context.ThemeContext.Provider value={{dark, setDark}}>
      <Context.GasContext.Provider value={{gasData, setGasData}}>
        <ThemeProvider theme={th}>
          <Background elevation={0} className="yes">
            <NavBar/>
            <GasPrices customGasPriceRef={customGasPriceRef} customGasPrice={customGasPrice} setCustomGasPrice={setCustomGasPrice}/>
            <PriceTable customGasPrice={customGasPrice} />
            <Calculator preset={preset} setPreset={setPreset} gasUsed={gasUsed} gasPriceRef={gasPriceRef} gasPrice={gasPrice} setGasPrice={setGasPrice} costMatic={costMatic} setCostMatic={setCostMatic} costUSD={costUSD} setCostUSD={setCostUSD}/>
            <Footer/>
          </Background>
        </ThemeProvider>
      </Context.GasContext.Provider>
    </Context.ThemeContext.Provider>
  )
}

export default App
