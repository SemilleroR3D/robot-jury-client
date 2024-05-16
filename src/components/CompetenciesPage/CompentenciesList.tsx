import { useCompetencie } from '../../hooks/useCompetencies'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
import { useNavigate } from 'react-router-dom'

export default function CompentenciesList () {
  const { Competencie } = useCompetencie()
  const navigate = useNavigate()

  const handleEditClick = (id: string) => {
    navigate(`/dashboard/competencies/${id}`)
  }

  return (
    <>
      <h1>Competencias</h1>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Nombre</TableCell>
              <TableCell align='center'>Descripción</TableCell>
              <TableCell align='center'>Lugar</TableCell>
              <TableCell align='center'>Fecha de inicio</TableCell>
              <TableCell align='center'>Fecha límite de registro</TableCell>
              <TableCell align='center'>Fecha límite de actualización</TableCell>
              <TableCell align='center'>Estado</TableCell>
              <TableCell align='center'>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Competencie.map((compencie) => (
              <TableRow key={compencie.id}>
                <TableCell align='center'>{compencie.name}</TableCell>
                <TableCell align='center'>{compencie.description}</TableCell>
                <TableCell align='center'>{compencie.place}</TableCell>
                <TableCell align='center'>
                  {new Date(compencie.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell align='center'>
                  {new Date(compencie.registerDeadline).toLocaleDateString()}
                </TableCell>
                <TableCell align='center'>
                  {new Date(compencie.deadlineUpdate).toLocaleDateString()}
                </TableCell>
                <TableCell align='center'>{compencie.status ? 'Activo' : 'Inactivo'}</TableCell>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title='Editar'>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Turnos'>
                      <IconButton onClick={() => handleEditClick(compencie.id)}>
                        <AssignmentTurnedInIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Eliminar'>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>

                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
