import { Grid,Container,Box,Typography } from '@mui/material'
import React from 'react'
import Navbar from './fragment/Navbar'
import SearchBar from './fragment/SearchBar'
import Footer from './fragment/Footer'

function Home() {
  return (
    <section>

<Grid container>
        <Grid item xs={12} md={12}>
            <Navbar/>
        </Grid>
    </Grid>
    <Container>
      <Box sx={{ textAlign: 'center', margin: '40px 0' }}>
        <Typography variant="subtitle1" sx={{ color: '#A3A3A3' }}>
          Search or Paste your URL
        </Typography>
      </Box>
      {/* Search Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <SearchBar />
      </Box>
    </Container>
    <Footer/>
    </section>
    
  )
}

export default Home