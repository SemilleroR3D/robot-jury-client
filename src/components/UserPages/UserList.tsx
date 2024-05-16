import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Tooltip
} from '@mui/material'
import { UserListProps } from '../../types/User'
import AddIcon from '@mui/icons-material/Add'
import UserRoleDialog from './UserRoleDialog'

export default function UserList ({ users }: UserListProps) {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)

  const handleAssignRoleClick = (userId: string) => {
    setSelectedUserId(userId)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

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
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  {user.firstName} {user.lastName}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {user.userTypes &&
                    user.userTypes.map((rol) => rol.name).join(', ')}
                  <Tooltip title='Asignar Rol'>
                    <IconButton onClick={() => handleAssignRoleClick(user.id)}>
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Button>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UserRoleDialog open={openDialog} onClose={handleCloseDialog} userId={selectedUserId} />
    </>
  )
}
