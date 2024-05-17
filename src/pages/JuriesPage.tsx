import {
  Card,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow
} from '@mui/material'
import EvaluationItem from '../components/JuriesPage/EvaluationItem'
import { useJuries } from '../hooks/useJuries'

const JuriesPage = () => {
  const { jury } = useJuries()

  if (!jury) return <h1>Loading</h1>

  return (
    <>
      <Card>
        <h3>Jurado</h3>
        <p>
          {jury.firstName} {jury.lastName}
        </p>
      </Card>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Evaluacion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell align='center'>
              {jury.evaluations.map((juryOnEvaluation) => (
                <EvaluationItem
                  key={juryOnEvaluation.evaluationId + juryOnEvaluation.userId}
                  evaluation={juryOnEvaluation.evaluation}
                />
              ))}
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default JuriesPage
