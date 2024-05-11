import { useState, useEffect } from 'react'
import UserList from '../components/UserList'
import { Select, TextField, MenuItem } from '@mui/material'
import { User, UserType } from '../types/User'
import { getAllUsers } from '../services/User'
import useUserStore from '../store/userStore.ts'
import { getAllRoles, getRoleById } from '../services/Role.ts'

export default function UserPage () {
  const user = useUserStore(state => state.user) as User
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [users, setUsers] = useState<User[]>([])
  const [roles, setRoles] = useState<UserType[]>([])

  useEffect(() => {
    const accessToken = user.accessToken

    const fetchUsers = async () => {
      try {
        const response = await getAllUsers(accessToken)
        setUsers(response)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    const fetchRoles = async () => {
      try {
        const rolesData = await getAllRoles(accessToken)
        setRoles(rolesData)
      } catch (error) {
        console.error('Error fetching roles:', error)
      }
    }

    fetchUsers()
    fetchRoles()
  }, [user.accessToken])

  const handleChange = (value: string) => {
    if (value) {
      getRoleById(user.accessToken, value).then(data => setUsers(data.users))
    } else {
      getAllUsers(user.accessToken).then((data) => console.log(data))
    }
  }

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
        onChange={(e) => handleChange(e.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value=''>
          <em>Todos los roles</em>
        </MenuItem>
        {roles.map(({ name, id }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <UserList users={users} searchTerm={searchTerm} />
    </>
  )
}
