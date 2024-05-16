import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import InboxIcon from '@mui/icons-material/Inbox'
import MailIcon from '@mui/icons-material/Mail'
import ListItemButton from '@mui/material/ListItemButton'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import GroupsIcon from '@mui/icons-material/Groups'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import GavelIcon from '@mui/icons-material/Gavel'
import DashboardIcon from '@mui/icons-material/Dashboard'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { styled, useTheme } from '@mui/material/styles'
import useDrawerStore from '../store/DrawerStore'

const drawerWidth = 240

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
  { name: 'Usuarios', path: '/dashboard/users', icon: PersonIcon },
  { name: 'Roles', path: '/dashboard/rol', icon: AdminPanelSettingsIcon },
  { name: 'Equipos', path: '/dashboard/teams', icon: GroupsIcon },
  { name: 'Competencias', path: '/dashboard/competencies', icon: EmojiEventsIcon },
  { name: 'Jurados', path: '/dashboard/juryman', icon: GavelIcon }
]

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

export default function DrawerDashboardMenu () {
  const theme = useTheme()
  const [open, setOpen] = useState(useMediaQuery('(min-width:600px)'))
  // useDrawerStore.getState().setDrawerWidth(drawerWidth)
  useDrawerStore.getState().setOpen(open)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <>
      {!open && (
        <IconButton
          edge='start'
          color='inherit'
          aria-label='abrir menú'
          sx={{
            display: { xs: 'block', md: 'block' },
            position: 'absolute',
            top: 8,
            left: 8,
            width: 100
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant='persistent'
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: 'block', sm: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '&.MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <DrawerHeader>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='cerrar drawer'
            onClick={toggleDrawer(false)}
          >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
