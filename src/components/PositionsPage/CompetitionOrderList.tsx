import { ICompetitionRegistration } from '../../services/positions'
import CompetitionOrderItem from './CompetitionOrderItem'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

interface ICompetitionOrderList {
  competitionRegistrations: ICompetitionRegistration[];
}

const CompetitionOrderList = ({ competitionRegistrations }: ICompetitionOrderList) => {
  return (
    <TableContainer component={Paper} style={{ minWidth: 650 }}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Nombre Robot</TableCell>
            <TableCell align='center'>Orden de Competicion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {competitionRegistrations.map((competitionRegistration) => (
            <TableRow key={competitionRegistration.id}>
              <TableCell align='center'>{competitionRegistration.robot.name}</TableCell>
              <TableCell align='center'>
                <CompetitionOrderItem
                  participationOrder={competitionRegistration.participationOrder}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CompetitionOrderList
