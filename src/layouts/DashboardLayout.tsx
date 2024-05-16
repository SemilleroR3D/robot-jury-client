import { Outlet } from 'react-router-dom'
import '../App.css'
import Navbar from '../components/Navbar'
import DrawerDashboardMenu from '../components/DrawerDashboarMenu'
import useDrawerStore from '../store/DrawerStore'
import { styled } from '@mui/material/styles'

function DashboardLayout () {
  const open = useDrawerStore(state => state.open)
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
      <DrawerDashboardMenu />
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
