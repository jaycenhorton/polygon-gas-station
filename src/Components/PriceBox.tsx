import { styled } from '@mui/material/styles';
import {Stack} from '@mui/material'

const PriceBox = styled(Stack)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#232425' : 'transparent',
    borderWidth: '3px',
    borderStyle: "solid",
}))

export default PriceBox