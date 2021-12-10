import {Typography, Paper, Container, Grid} from '@mui/material'
import { styled } from '@mui/material/styles';

const Nav = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#232425' : '#FFFFFF',
  margin: 0
})) 

const NavBar = () => {
    return (
        <Nav square={true} elevation={4}>
          <Container maxWidth="xl">
            <Grid container paddingY={2}>
              <Grid item container columnSpacing={4}  xs={6}>
                  <Grid item>
                      <Grid container columnSpacing={1}>
                        <Grid item>
                            <img src="https://raw.githubusercontent.com/Jcanotorr06/images/25b983a0fda2acb07372475969fba7b1fe13370f/polygongaswatch.svg" alt="" />
                        </Grid>
                        <Grid item>
                            <Typography fontWeight="bold" lineHeight={1.5} variant="h4">
                                Polygon Gas Station
                            </Typography>
                        </Grid>
                      </Grid>
                  </Grid>               
              </Grid>              
            </Grid>
          </Container>
        </Nav>
    )
}

export default NavBar
