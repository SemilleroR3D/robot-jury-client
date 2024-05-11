import { Outlet } from 'react-router-dom'
import '../App.css'
import Navbar from '../components/Navbar'
import DrawerDashboarMenu from '../components/DrawerDashboarMenu'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

function DashboardLayout () {
  return (
    <>
      <Navbar />
      <DrawerDashboarMenu />
      <Box component='main' sx={{ flexGrow: 1, p: '10%', marginLeft: '10%' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </>
  )
}

export default DashboardLayout
