import { IEvaluation } from '../../services/juries'
import CriterionList from './CriteriaList'
import { TableCell, TableHead, TableRow, Table } from '@mui/material'

interface IEvaluationItem {
  evaluation: IEvaluation;
}

const EvaluationItem = ({ evaluation }: IEvaluationItem) => {
  return (
    <Table aria-label='simple table'>
      <TableHead>
        <TableRow>
          <TableCell align='center'>Area Evaluacion</TableCell>
          <TableCell align='center'>Criterio Evaluacion</TableCell>
        </TableRow>
      </TableHead>
      <TableRow>
        <TableCell align='center'>
          <h3>{evaluation.name}</h3>
        </TableCell>
        <TableCell align='right'>
          <CriterionList criteria={evaluation.evaluationCriterions} />
        </TableCell>
      </TableRow>
    </Table>
  )
}

export default EvaluationItem
