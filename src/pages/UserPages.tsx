import { useState } from 'react'
import UserList from '../components/UserPages/UserList'
import { Select, TextField, MenuItem, Typography, Grid } from '@mui/material'
import { useUsers } from '../hooks/useUsers.tsx'
import { useUserTypes } from '../hooks/useUserTypes.tsx'

export default function UserPage () {
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const { visibleUsers } = useUsers({ searchTerm, role: roleFilter })
  const { userTypes } = useUserTypes()

  return (
    <>
      <Typography variant='h4' gutterBottom>
        Usuarios
      </Typography>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={8}>
          <TextField
            label='Buscar usuario'
            variant='outlined'
            fullWidth
            margin='normal'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value=''>
              <em>Todos los roles</em>
            </MenuItem>
            {userTypes.map(({ name, id }) => (
              <MenuItem key={id} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <UserList users={visibleUsers} />
    </>
  )
}
