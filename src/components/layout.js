import { Box } from '@mui/material'
import React from 'react'
import Footer from './footer'
import Header from './header'

function Layout({children}) {
  return (
    <Box mx={10} my={2}>
          <Header />
          <Box my={10} style={{height:"70vh", backgroundColor:"#ffffff", borderRadius:5}} p={5} >
          {children} 
          </Box>
          <Footer/>
    </Box>
  )
}

export default Layout