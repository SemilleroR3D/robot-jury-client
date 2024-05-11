import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import AdbIcon from '@mui/icons-material/Adb'
import MenuItem from '@mui/material/MenuItem'
import { User } from '../types/User'
import { Link, useLocation } from 'react-router-dom'
import useUserStore from '../store/userStore.ts'

// Conjunto de páginas para usuarios no administradores
const pagesNonAdmin = [
  { name: 'Competencias', path: '/' },
  { name: 'Acerca de', path: '/' }]

// Conjunto de páginas para usuarios administradores
const pagesAdmin = [
  { name: 'Acerca de', path: '/' },
  { name: 'Competencias', path: '/' },
  { name: 'Dashboard', path: '/dashboard' }]

export default function MenuNavbar () {
  const user = useUserStore(state => state.user) as User
  let roles: string[] = []

  if (user && user.userTypes.length !== 0) {
    roles = user.userTypes.map(({ name }) => name)
  }

  const location = useLocation()

  const drawerWidth = 240
  const isDashboard = location.pathname === '/dashboard'

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  // Determinar qué páginas mostrar basado en el rol del usuario
  const pagesToShow = roles.includes('Admin') ? pagesAdmin : pagesNonAdmin

  return (
    <>
      <Box sx={{
        flexGrow: 0,
        display: {
          xs: 'flex',
          md: 'none'
        }
      }}
      >
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpenNavMenu}
          color='inherit'
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: {
              xs: 'block',
              md: 'none',
              marginLeft: isDashboard ? '20%' : '-0.1%',
              width: isDashboard ? `calc(0% - ${drawerWidth}px)` : '100%',
              ml: isDashboard ? `calc(4% - ${drawerWidth}px)` : 0
            }
          }}
        >
          {pagesToShow.map((page) => (
            <MenuItem key={page.name}>
              <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography textAlign='center'>{page.name}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Typography
        variant='h5'
        noWrap
        component='a'
        href='/'
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        Competencia Robotica2
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pagesToShow.map((page) => (
          <MenuItem key={page.name}>
            <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography textAlign='center'>{page.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Box>
    </>
  )
}
