import React from 'react'
import Navbar2 from './fragments/Navbar2'
import Footer from '../fragment/Footer'
import SearchBar2 from './fragments/SearchBar2'
import { Box } from '@mui/material'

function LandingPage() {
  return (
    <>
    <Navbar2/>
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px',mt:10 }}>
          <SearchBar2/>
        </Box>
    <Footer/>
    </>
    
  )
}

export default LandingPage