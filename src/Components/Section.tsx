import { styled } from '@mui/material/styles';
import {Box} from '@mui/material'

const Section = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#232425' : '#FFFFFF',
  margin: '2rem 0'  
}))

export default Section