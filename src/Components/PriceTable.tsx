import {Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Container, Typography, Stack} from '@mui/material'
import { styled } from '@mui/system';
import Section from './Section'
import Context from '../Context';
import { useContext } from 'react';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableHeader = styled(TableRow)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : theme.palette.action.hover
}))

const StyledTableContainer = styled(TableContainer)(({theme}) => ({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.mode === 'dark' ? '#363738' : theme.palette.action.hover
}))

interface transaction{
    name: string
    interaction: string
    gasUsed: number
    fastest: number
    fast: number
    custom:  number
    standard: number
    imageURL: string
}


const PriceTable = ({customGasPrice}:any) => {
    const {gasData} = useContext(Context.GasContext)
    const transactions : transaction[] = [
        {
            name: 'MATIC',
            interaction: 'Transfer',
            gasUsed: 21000,
            fastest: parseFloat((((21000*gasData.fastest)/1000000000)*gasData.price).toFixed(6)),
            fast: parseFloat((((21000*gasData.fast)/1000000000)*gasData.price).toFixed(6)),
            custom: parseFloat((((21000*customGasPrice)/1000000000)*gasData.price).toFixed(6)),
            standard: parseFloat((((21000*gasData.standard)/1000000000)*gasData.price).toFixed(6)),
            imageURL: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912'
        },
        {
            name: 'ETH',
            interaction: 'Transfer',
            gasUsed: 44193,
            fastest: parseFloat((((44193*gasData.fastest)/1000000000)*gasData.price).toFixed(6)),
            fast: parseFloat((((44193*gasData.fast)/1000000000)*gasData.price).toFixed(6)),
            custom: parseFloat((((21000*customGasPrice)/1000000000)*gasData.price).toFixed(6)),
            standard: parseFloat((((44193*gasData.standard)/1000000000)*gasData.price).toFixed(6)),
            imageURL: 'https://raw.githubusercontent.com/Jcanotorr06/images/main/coins/eth.png'
        },        
        {
            name: 'USDC',
            interaction: 'Transfer',
            gasUsed: 72645,
            fastest: parseFloat((((72645*gasData.fastest)/1000000000)*gasData.price).toFixed(6)),
            fast: parseFloat((((72645*gasData.fast)/1000000000)*gasData.price).toFixed(6)),
            custom: parseFloat((((21000*customGasPrice)/1000000000)*gasData.price).toFixed(6)),
            standard: parseFloat((((72645*gasData.standard)/1000000000)*gasData.price).toFixed(6)),
            imageURL: 'https://raw.githubusercontent.com/Jcanotorr06/images/main/coins/usdc.png'
        },
        {
            name: 'QuickSwap',
            interaction: 'Swap',
            gasUsed: 282804,
            fastest: parseFloat((((282804*gasData.fastest)/1000000000)*gasData.price).toFixed(6)),
            fast: parseFloat((((282804*gasData.fast)/1000000000)*gasData.price).toFixed(6)),
            custom: parseFloat((((21000*customGasPrice)/1000000000)*gasData.price).toFixed(6)),
            standard: parseFloat((((282804*gasData.standard)/1000000000)*gasData.price).toFixed(6)),
            imageURL: 'https://raw.githubusercontent.com/Jcanotorr06/images/main/coins/quick.png'
        },
        {
            name: 'SushiSwap',
            interaction: 'Swap',
            gasUsed: 189663,
            fastest: parseFloat((((189663*gasData.fastest)/1000000000)*gasData.price).toFixed(6)),
            fast: parseFloat((((189663*gasData.fast)/1000000000)*gasData.price).toFixed(6)),
            custom: parseFloat((((21000*customGasPrice)/1000000000)*gasData.price).toFixed(6)),
            standard: parseFloat((((189663*gasData.standard)/1000000000)*gasData.price).toFixed(6)),
            imageURL: 'https://raw.githubusercontent.com/Jcanotorr06/images/main/coins/sushi.png'
        },
        {
            name: 'DFYN',
            interaction: 'Swap',
            gasUsed: 172762,
            fastest: parseFloat((((172762*gasData.fastest)/1000000000)*gasData.price).toFixed(6)),
            fast: parseFloat((((172762*gasData.fast)/1000000000)*gasData.price).toFixed(6)),
            custom: parseFloat((((21000*customGasPrice)/1000000000)*gasData.price).toFixed(6)),
            standard: parseFloat((((172762*gasData.standard)/1000000000)*gasData.price).toFixed(6)),
            imageURL: 'https://raw.githubusercontent.com/Jcanotorr06/images/main/coins/dfyn.png'
        },
    ]

    return (
        <Container maxWidth="xl">
            <Section>
                <Typography variant="h5" textAlign="center" marginBottom={3}>Estimated Cost of Transactions</Typography>
                <StyledTableContainer>
                    <Table>
                        <TableHead>
                            <StyledTableHeader>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Interaction
                                </TableCell>
                                <TableCell>
                                    Gas Used
                                </TableCell>
                                <TableCell>
                                    Fastest
                                </TableCell>
                                <TableCell>
                                    Fast
                                </TableCell>
                                <TableCell>
                                    Standard
                                </TableCell>
                                <TableCell>
                                    Custom
                                </TableCell>
                            </StyledTableHeader>
                        </TableHead>
                        <TableBody>
                            {transactions.map((transaction, i) => (
                                <StyledTableRow key={i}>
                                    <TableCell>
                                        <Stack spacing={1} direction="row">
                                            <div>
                                                <img src={transaction.imageURL} alt="" />
                                            </div>
                                            <div>
                                                {transaction.name}
                                            </div>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        {transaction.interaction}
                                    </TableCell>
                                    <TableCell>
                                        <Typography color={transaction.name !== 'MATIC' ? ("#8247E5") : '#000000'}>
                                            {transaction.gasUsed}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        {`$${transaction.fastest}`}
                                    </TableCell>
                                    <TableCell>
                                        {`$${transaction.fast}`}
                                    </TableCell>
                                    <TableCell>
                                        {`$${transaction.standard}`}
                                    </TableCell>
                                    <TableCell>
                                        {`$${transaction.custom}`}
                                    </TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>                        
                    </Table>
                </StyledTableContainer>
            </Section>
        </Container>
    )
}

export default PriceTable
