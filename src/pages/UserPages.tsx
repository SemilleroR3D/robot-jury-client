import { useState, useEffect } from 'react'
import UserList from '../components/UserList'
import { Select, TextField, MenuItem } from '@mui/material'
import { User, UserType } from '../types/User'
import useUserStore from '../store/userStore.ts'
import { getAllRoles } from '../services/Role.ts'
import { useUsers } from '../hooks/useUsers.tsx'

export default function UserPage () {
  const user = useUserStore(state => state.user) as User
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const { users } = useUsers()
  const [roles, setRoles] = useState<UserType[]>([])

  useEffect(() => {
    const accessToken = user.accessToken

    const fetchRoles = async () => {
      try {
        const rolesData = await getAllRoles(accessToken)
        setRoles(rolesData)
      } catch (error) {
        console.error('Error fetching roles:', error)
      }
    }

    fetchRoles()
  }, [user.accessToken])

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
        {roles.map(({ name, id }) => (
          <MenuItem key={id} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <UserList users={users} role={roleFilter} searchTerm={searchTerm} />
    </>
  )
}
