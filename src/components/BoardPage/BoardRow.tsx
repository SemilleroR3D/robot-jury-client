import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { IComptetitionRegister } from '../../services/board'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import { useState } from 'react'

interface IBoardRow {
  competitionRegistration: IComptetitionRegister;
}

const BoardRow = ({ competitionRegistration }: IBoardRow) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {competitionRegistration.robot.name}
        </TableCell>
        <TableCell align='center'>{(competitionRegistration.total / 10).toPrecision(2)}</TableCell>
        <TableCell align='center'>
          <LocalShippingIcon
            sx={{
              color: competitionRegistration.participationOrder.isRunning
                ? 'green'
                : 'red'
            }}
          />
        </TableCell>
        <TableCell align='center'>
          {competitionRegistration.participationOrder.place}
        </TableCell>
        <TableCell align='center'>
          {competitionRegistration.participationOrder.try}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h5' gutterBottom component='div'>
                Puntaje por criterio de evaluación
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    {competitionRegistration.notes.map((note) => (
                      <TableCell
                        align='center'
                        key={note.evaluationCriterion.id}
                      >
                        <Typography variant='subtitle2'>
                          {note.evaluationCriterion.name}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {competitionRegistration.notes.map((note) => (
                      <TableCell
                        align='center'
                        key={note.evaluationCriterion.name}
                      >
                        <Typography>{note.note / 10}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default BoardRow
