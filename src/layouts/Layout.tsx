import { Outlet } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Box } from '@mui/material'

function Layout () {
  return (
    <>
      <Navbar />
      <Box component='main' sx={{ p: '3%', margin: 10 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}

export default Layout
