import { useState } from 'react'
import UserList from '../components/UserList'
import { Select, TextField, MenuItem } from '@mui/material'
import { useUsers } from '../hooks/useUsers.tsx'
import { useUserTypes } from '../hooks/useUserTypes.tsx'

export default function UserPage () {
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const { visibleUsers } = useUsers({ searchTerm, role: roleFilter })
  const { userTypes } = useUserTypes()

  return (
    <>
      <TextField
        label='Buscar usuario'
        variant='outlined'
        fullWidth
        margin='normal'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
      <UserList users={visibleUsers} />
    </>
  )
}
