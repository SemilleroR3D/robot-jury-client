import { useState } from 'react'
import { IParticipationOrder } from '../../services/positions'
import { useCompetitionOrder } from '../../hooks/useCompetitionOrder'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import AddRoadIcon from '@mui/icons-material/AddRoad'

interface ICompetitionOrderItem {
  participationOrder: IParticipationOrder;
}

const CompetitionOrderItem = ({ participationOrder }: ICompetitionOrderItem) => {
  const { addTry, removeTry, changeRunning } = useCompetitionOrder()
  const [order, setOrder] = useState(participationOrder)

  return (
    <TableContainer component={Paper} style={{ minWidth: 650 }}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Lugar</TableCell>
            <TableCell align='center'>Intento</TableCell>
            <TableCell align='center'>Estatus</TableCell>
            <TableCell align='center'>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow style={{ backgroundColor: order.isRunning ? 'green' : undefined }}>
            <TableCell align='center'>{order.place}</TableCell>
            <TableCell align='center'>{order.try}</TableCell>
            <TableCell align='center'>{order.isRunning ? 'Corriendo' : 'Esperando'}</TableCell>
            <TableCell align='center'>
              <Tooltip title='Anadir Intento'>
                <Button variant='contained' color='primary' onClick={() => addTry(order.id, order.try).then(setOrder)}>
                  <AddIcon />
                </Button>
              </Tooltip>
              <Tooltip title='Eliminar Intento'>
                <Button variant='contained' color='secondary' onClick={() => removeTry(order.id, order.try).then(setOrder)}>
                  <RemoveIcon />
                </Button>
              </Tooltip>
              <Tooltip title='En pista'>
                <Button variant='outlined' onClick={() => changeRunning(order.id, order.isRunning).then(setOrder)}>
                  <AddRoadIcon />
                </Button>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CompetitionOrderItem
