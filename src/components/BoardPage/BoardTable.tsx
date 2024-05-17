import { Paper, TableRow, Typography } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import { styled } from '@mui/material/styles'
import { IComptetitionRegister } from '../../services/board'
import IconButton from '@mui/material/IconButton'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import BoardRow from './BoardRow'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#137734',
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

interface IBoardTable {
  competitionRegistrations: IComptetitionRegister[];
}

const BoardTable = ({ competitionRegistrations }: IBoardTable) => {
  return (
    <TableContainer sx={{ marginTop: '10px' }} component={Paper}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align='center' colSpan={4}>
              <Typography variant='h5'>Información de los equipos</Typography>
            </StyledTableCell>
            <StyledTableCell align='center' colSpan={2}>
              <Typography variant='h5'>Orden de participación</Typography>
            </StyledTableCell>
          </StyledTableRow>
          <TableRow>
            <TableCell />
            <TableCell>
              <Typography variant='subtitle1' align='center'>
                Nombre robot
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant='subtitle1' align='center'>
                <IconButton>
                  <SwapVertIcon />
                </IconButton>
                Puntaje
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant='subtitle1' align='center'>
                Corriendo
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant='subtitle1' align='center'>
                <IconButton>
                  <SwapVertIcon />
                </IconButton>
                Turno
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant='subtitle1' align='center'>
                <IconButton>
                  <SwapVertIcon />
                </IconButton>
                Intento
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {competitionRegistrations.map((competitionRegistration) => (
            <BoardRow
              key={competitionRegistration.id}
              competitionRegistration={competitionRegistration}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BoardTable
