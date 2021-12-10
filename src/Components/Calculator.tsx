import { Container, Typography, ToggleButton, ToggleButtonGroup, TextField, Box, Button, Stack} from "@mui/material"
import { MouseEvent, useContext, Dispatch, SetStateAction, FormEvent, MutableRefObject } from "react"
import Section from "./Section"
import PriceBox from "./PriceBox"
import Context from "../Context"

interface Props{
    preset: string
    setPreset: Dispatch<SetStateAction<string>>
    gasPrice: number
    setGasPrice: Dispatch<SetStateAction<number>>
    gasUsed: MutableRefObject<any>
    gasPriceRef: MutableRefObject<any>
    costMatic: number
    setCostMatic: Dispatch<SetStateAction<number>>
    costUSD: number
    setCostUSD: Dispatch<SetStateAction<number>>
}

const Calculator = ({preset, setPreset, gasPrice, setGasPrice, gasUsed, gasPriceRef, costMatic, setCostMatic, costUSD, setCostUSD}:Props) => {
    
    const {gasData} = useContext(Context.GasContext)

    const handlePreset = (e: MouseEvent<HTMLElement>, newPreset: 'fastest' | 'fast' | 'standard' | 'safeLow') => {
        setPreset(newPreset)
        setGasPrice(gasData[newPreset])
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(preset === 'custom'){
            setCostMatic((parseFloat(gasPriceRef.current.value) * parseFloat(gasUsed.current.value))/1000000000)
            setCostUSD(((parseFloat(gasPriceRef.current.value) * parseFloat(gasUsed.current.value))/1000000000)*gasData.price)
        }
        else{
            setCostMatic((gasPrice * parseFloat(gasUsed.current.value))/1000000000)
            setCostUSD(((gasPrice * parseFloat(gasUsed.current.value))/1000000000)*gasData.price)
        }
    }

    return (
        <Container maxWidth="xl" className="yes">
            <Section textAlign="center" padding={6}>
                <Typography variant="h5" textAlign="center" marginBottom={3}>Transaction Gas Fee Calculator</Typography>
                <ToggleButtonGroup value={preset} exclusive color="primary" size="large" onChange={handlePreset}>
                        <ToggleButton value="fastest">Fastest</ToggleButton>
                        <ToggleButton value="fast">Fast</ToggleButton>
                        <ToggleButton value="standard">Standard</ToggleButton>
                        <ToggleButton value="safeLow">Slow</ToggleButton>
                        <ToggleButton value="custom">Custom</ToggleButton>
                </ToggleButtonGroup>
                <Box component="form" onSubmit={handleSubmit} marginY={3} maxWidth={{xs: '100%', lg: '75%'}} marginX="auto">
                    <Box marginY={2}>
                        <TextField required disabled={preset !== 'custom'} name="gasPrice" label="Gas Price (Gwei)" inputRef={preset === 'custom' ? gasPriceRef : undefined} value={preset !== 'custom' ? gasPrice : undefined} fullWidth/>
                    </Box>
                    <Box marginY={2}>
                        <TextField required label="Gas Used" name="gasUsed" inputRef={gasUsed} fullWidth/>
                    </Box>
                    <Box marginY={2}>
                        <Button type="submit" variant="contained" fullWidth size="large">Calculate</Button>
                    </Box>
                </Box>


                <Box marginTop={8}>
                    <Typography variant="h5" textAlign="center" marginBottom={3}>Calculated Transaction Fee</Typography>
                </Box>


                <Stack direction={{xs: 'column', lg: 'row'}} marginY={2} spacing={4} justifyContent="center">
                    <PriceBox padding={{xs:'1rem'}} borderRadius={{xs: 0, lg: '10%'}} borderColor="#8247E5" display="flex" flexDirection={{xs: 'row', lg: 'column'}} justifyContent={{xs: 'space-between', lg: 'space-around'}} width={{xs: 'initial', lg: "20%"}} height={{xs: 50, lg: 200}}>
                        <Typography variant="h4">
                            {costMatic.toFixed(6)}
                        </Typography>
                        <Typography variant="h3" color="#8247E5">
                            MATIC
                        </Typography>
                    </PriceBox>
                    <PriceBox padding={{xs:'1rem'}} borderRadius={{xs: 0, lg: '10%'}} borderColor="green" display="flex" alignItems="center" flexDirection={{xs: 'row', lg: 'column'}} justifyContent={{xs: 'space-between', lg: 'space-around'}} width={{xs: 'initial', lg: "20%"}} height={{xs: 50, lg: 200}}>
                        <Typography variant="h4">
                            ${costUSD.toFixed(6)}
                        </Typography>
                        <Typography variant="h3" color="green">
                            USD
                        </Typography>
                    </PriceBox>
                </Stack>
            </Section>
        </Container>
    )
}

export default Calculator
