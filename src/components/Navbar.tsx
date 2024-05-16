import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { Link, useLocation } from 'react-router-dom'
import useUserStore from '../store/userStore.ts'
import { User } from '../types/User'
import MenuNavbar from './MenuNavbar'

const settings = ['', 'Cerrar Session']

function ResponsiveAppBar () {
  const user = useUserStore(state => state.user) as User
  const fullName = `${user?.firstName} ${user?.lastName}`
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const location = useLocation()
  const isDashboard = location.pathname.startsWith('/dashboard')

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget)
  const handleCloseUserMenu = () => setAnchorElUser(null)

  const renderUserSettings = () => {
    if (!user) {
      return (
        <MenuItem>
          <Box display='flex' flexDirection='column'>
            <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant='button'>Iniciar Sesión</Typography>
            </Link>
            <Box mt={1}>
              <Link to='/register' style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant='button'>Crear Cuenta</Typography>
              </Link>
            </Box>
          </Box>
        </MenuItem>
      )
    }

    return settings.map(setting => (
      <MenuItem key={setting} onClick={setting === 'Cerrar Session' ? () => useUserStore.getState().setUser(null) : handleCloseUserMenu}>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography textAlign='center'>{setting || fullName}</Typography>
        </Link>
      </MenuItem>
    ))
  }

  return (
    <>
      {!isDashboard && (
        <AppBar sx={{ marginTop: '-0.1%', borderRadius: '0px', zIndex: isDashboard ? (theme) => theme.zIndex.drawer + 1 : 0 }}>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                Competencia Robotica
              </Typography>
              <MenuNavbar />
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Cuenta'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon fontSize='large' color='inherit' sx={{ display: { xs: 'flex', md: 'flex', color: 'white' } }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px', transitionDuration: '300ms' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {renderUserSettings()}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  )
}

export default ResponsiveAppBar
