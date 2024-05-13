import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import { UserListProps } from '../types/User'
import { useMemo } from 'react'

export default function UserList ({ users, searchTerm, role }: UserListProps) {
  const visibleUsers = useMemo(() => users
    .filter(
      ({ firstName, lastName, userTypes }) => `${firstName} ${lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) && role === ''
        ? true
        : userTypes.find(userType => userType.name === role))
  , [users, searchTerm, role])

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.firstName} {user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.userTypes && user.userTypes.map(rol => rol.name).join(', ')}
                </TableCell>
                <TableCell>
                  <Button>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
