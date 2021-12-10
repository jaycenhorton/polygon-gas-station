import { Container, Typography, Box, Stack, TextField } from '@mui/material'
import PriceBox from './PriceBox'
import {faRocket, faPlane, faCar, faBicycle, faAsterisk} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { keyframes } from '@mui/system';
import { useContext, useState, useEffect } from 'react'
import Context from '../Context'

const grow = keyframes`
  from {
    height: 100;
  }
  to {
    height: 0;
  }
`;


const GasPrices = ({customGasPrice, setCustomGasPrice, customGasPriceRef}:any) => {

    const {gasData} = useContext(Context.GasContext)
    const [time, setTime] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(time === 100){
                setTime(0)
            }
            else{
                setTime(t => t+11.1111111111)
            }
        }, 1000)

        return () =>clearInterval(interval)
    }, [time])
    
    const handleChange = (event:any) => {
        setCustomGasPrice(event.target.value);
    };
    

    return (
        <Container maxWidth="xl">
            <Typography textAlign="center" variant="h5" margin={4}>
                Gas Price (Gwei)
            </Typography>
            <Stack spacing={2} justifyContent="space-around" direction={{xs: 'column', md: 'row'}} >
                <PriceBox sx={{ backgroundColor: "#00AC2625" }} spacing={{xs: 2 ,md:6}} justifyContent={{xs: 'space-between', md: 'initial'}} alignItems={{xs: 'center', md: 'initial'}} direction={{xs: 'row', md: 'column'}} textAlign="center" borderColor='#00AC26' width={{md: "100%"}} height={{xs: 50, md: 225}}>
                    <Box 
                        sx={{
                            backgroundColor: "white",
                            width: "100%",
                            height: "100%",
                            animation: `${grow} 30s infinite`,
                        }}
                    >
                        <Box sx={{ padding: "1.5rem" }} display="flex" justifyContent="center" alignItems="center" >
                            <Box color="#00AC26" padding="0.5rem" marginRight="0.5rem"  display="inline-block"  >
                                <FontAwesomeIcon icon={faRocket} fixedWidth/>
                            </Box>
                            <Typography variant="h6" fontWeight={500}>
                                Fastest
                            </Typography>
                        </Box>
                        <Typography variant="h3" fontWeight={500} textAlign="center">
                            {gasData.fastest.toFixed(0)}
                        </Typography>
                        <Typography variant="subtitle1" color="#9C9C9C">
                            ${(((21000*gasData.fastest)/1000000000)*gasData.price).toFixed(6)} | ~5-10 Seconds
                        </Typography>
                    </Box>
                </PriceBox>

                <PriceBox sx={{ backgroundColor: "#8247E525" }} spacing={{xs: 2 , md:6}} justifyContent={{xs: 'space-between', md: 'initial'}} alignItems={{xs: 'center', md: 'initial'}} direction={{xs: 'row', md: 'column'}} textAlign="center" borderColor='#8247E5' width={{md: "100%"}} height={{xs: 50, md: 225}}>
                    <Box 
                        sx={{
                            backgroundColor: "white",
                            width: "100%",
                            height: "100%",
                            animation: `${grow} 30s infinite`,
                        }}
                    >
                        <Box sx={{ padding: "1.5rem" }}  display="flex" justifyContent="center" alignItems="center" >
                            <Box color="#8247E5" padding="0.5rem" marginRight="0.5rem" display="inline-block"  >
                                <FontAwesomeIcon icon={faPlane} fixedWidth/>
                            </Box>
                            <Typography variant="h6" fontWeight={500}>
                                Fast
                            </Typography>
                        </Box>
                        <Typography color="#8247E5" variant="h3" fontWeight={500} textAlign="center">
                            {gasData.fast.toFixed(0)}
                        </Typography>
                        <Typography variant="subtitle1" color="#9C9C9C">
                            ${(((21000*gasData.fast)/1000000000)*gasData.price).toFixed(6)} | ~10-30 Seconds
                        </Typography>
                    </Box>
                </PriceBox>

                <PriceBox sx={{ backgroundColor: "#0400E025" }} spacing={{xs: 2 ,md:6}} justifyContent={{xs: 'space-between', md: 'initial'}} alignItems={{xs: 'center', md: 'initial'}} direction={{xs: 'row', md: 'column'}} textAlign="center" borderColor='#0400E0' width={{md: "100%"}} height={{xs: 50, md: 225}}>
                    <Box 
                        sx={{
                            backgroundColor: "white",
                            width: "100%",
                            height: "100%",
                            animation: `${grow} 30s infinite`,
                        }}
                    >
                        <Box sx={{ padding: "1.5rem" }} display="flex" justifyContent="center" alignItems="center" >
                            <Box color="#0400E0" padding="0.5rem" marginRight="0.5rem"  display="inline-block"  >
                                <FontAwesomeIcon icon={faCar} fixedWidth/>
                            </Box>
                            <Typography variant="h6" fontWeight={500}>
                                Standard
                            </Typography>
                        </Box>
                        <Typography color="#0400E0" variant="h3" fontWeight={500} textAlign="center">
                            {gasData.standard.toFixed(0)}
                        </Typography>
                        <Typography variant="subtitle1" color="#9C9C9C">
                            ${(((21000*gasData.standard)/1000000000)*gasData.price).toFixed(6)} | ~30-60 Seconds
                        </Typography>
                    </Box>
                </PriceBox>

                <PriceBox sx={{ backgroundColor: "#E4000025" }} spacing={{xs: 2 ,md:6}} justifyContent={{xs: 'space-between', md: 'initial'}} alignItems={{xs: 'center', md: 'initial'}} direction={{xs: 'row', md: 'column'}} textAlign="center" borderColor='#E40000' width={{md: "100%"}} height={{xs: 50, md: 225}}>
                    <Box 
                        sx={{
                            backgroundColor: "white",
                            width: "100%",
                            height: "100%",
                            animation: `${grow} 30s infinite`,
                        }}
                    >
                        <Box sx={{ padding: "1.5rem" }} display="flex" justifyContent="center" alignItems="center" >
                            <Box color="#E40000" padding="0.5rem" marginRight="0.5rem"  display="inline-block"  >
                                <FontAwesomeIcon icon={faBicycle} fixedWidth/>
                            </Box>
                            <Typography variant="h6" fontWeight={500}>
                                Slow
                            </Typography>
                        </Box>
                        <Typography color="#E40000" variant="h3" fontWeight={500} textAlign="center">
                            {gasData.safeLow.toFixed(0)}
                        </Typography>
                        <Typography variant="subtitle1" color="#9C9C9C">
                            ${(((21000*gasData.safeLow)/1000000000)*gasData.price).toFixed(6)} | &#62; 1 Minute
                        </Typography>
                    </Box>
                </PriceBox>

                <PriceBox sx={{ backgroundColor: "#cc660025" }} spacing={{xs: 2 ,md:6}} justifyContent={{xs: 'space-between', md: 'initial'}} alignItems={{xs: 'center', md: 'initial'}} direction={{xs: 'row', md: 'column'}} textAlign="center" borderColor='#cc6600' width={{md: "100%"}} height={{xs: 50, md: 225}}>
                    <Box 
                        component="form"
                        sx={{
                            backgroundColor: "white",
                            width: "100%",
                            height: "100%",
                            animation: `${grow} 30s infinite`,
                        }}
                    >
                        <Box sx={{ padding: "1.5rem" }} display="flex" justifyContent="center" alignItems="center" >
                            <Box color="#cc6600" padding="0.5rem" marginRight="0.5rem" display="inline-block" >
                                <FontAwesomeIcon icon={faAsterisk} fixedWidth/>
                            </Box>
                            <Typography variant="h6" fontWeight={500}>
                                Custom
                            </Typography>
                        </Box>
                        <TextField InputProps={{
                            style: {color:'#cc6600'}
                        }} inputRef={customGasPriceRef} sx={{width:"50%"}} value={customGasPrice} onChange={handleChange} />
                        <Typography variant="subtitle1" color="#9C9C9C">
                            ${(((21000*customGasPrice)/1000000000)*gasData.price).toFixed(6)} | Unknown
                        </Typography>
                    </Box>
                </PriceBox>


            </Stack>

            <Box justifyContent="space-between" display="flex" marginTop={2}>
                <Typography variant="subtitle2">
                    MATIC price: ${gasData.price.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 5})}
                </Typography>       
                <Typography textAlign="center" variant="subtitle1" color="#9C9C9C" >Updates Every <strong>30 Seconds</strong></Typography>         
            </Box>            
        </Container>
    )
}

export default GasPrices
