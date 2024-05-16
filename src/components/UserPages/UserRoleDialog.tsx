import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { UserRoleDialogProps, UserTypeUser } from '../../types/User'
import { useUserTypes } from '../../hooks/useUserTypes'
import { postUsertypeUser } from '../../services/Role'
import useUserStore from '../../store/userStore'

const UserRoleDialog: React.FC<UserRoleDialogProps> = ({ open, onClose, userId }) => {
  const accessToken = useUserStore((state) => state.user?.accessToken) || ''
  const { userTypes } = useUserTypes()
  const [selectedRole, setSelectedRole] = useState('')

  console.log(selectedRole)

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const AsigmentRol: UserTypeUser = {
      userId,
      userTypeId: selectedRole
    }

    try {
      const response = await postUsertypeUser(accessToken, AsigmentRol)
      console.log('Respuesta del servidor:', response)
    } catch (error) {
      console.error('Error al guardar el rol:', error)
    }

    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth='md'
      PaperProps={{
        sx: {
          width: '50%',
          margin: 'auto'
        }
      }}
    >
      <DialogTitle>Asignar Rol</DialogTitle>
      <DialogContent>
        <Select
          displayEmpty
          name='rol'
          id='rol'
          value={selectedRole}
          onChange={(event) => setSelectedRole(event.target.value)}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value=''>
            <em>Todos los roles</em>
          </MenuItem>
          {userTypes.map(({ name, id }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
        <Button onClick={handleSubmit}>Guardar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UserRoleDialog
