import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import DrawerDashboardMenu from '../components/DrawerDashboarMenu'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

const drawerWidth = 240

function DashboardLayout () {
  const [open, setOpen] = useState(useMediaQuery('(min-width:600px)'))

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean; }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(10),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `10-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      flexGrow: 1,
      marginLeft: 140,
      padding: theme.spacing(10)

    })
  }))

  return (
    <>
      <Navbar />
      <DrawerDashboardMenu open={open} setOpen={setOpen} />
      <Main open={open}>
        <Outlet />
      </Main>
    </>
  )
}

export default DashboardLayout
