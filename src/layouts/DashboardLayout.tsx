import { Outlet } from 'react-router-dom'
import '../App.css'
import Navbar from '../components/Navbar'
import DrawerDashboardMenu from '../components/DrawerDashboarMenu'
import useDrawerStore from '../store/DrawerStore'

import useMediaQuery from '@mui/material/useMediaQuery'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

function DashboardLayout () {
  const [open, setOpen] = useState(useMediaQuery('(min-width:600px)'))
  console.log(open)

  const drawerWidth = useDrawerStore(state => state.drawerWidth)

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean; }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 100
    })
  }))

  return (
    <>
      <Navbar />
      <DrawerDashboardMenu open={open} setOpen={setOpen} />
      {/* <Box component='main' sx={{ flexGrow: 1, p: '10%', marginLeft: '10%' }}>
        <Outlet />
      </Box> */}
      <Main open={open}>
        <Outlet />
      </Main>
    </>
  )
}

export default DashboardLayout
