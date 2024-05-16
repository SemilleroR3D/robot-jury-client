import EvaluationItem from '../components/JuriesPage/EvaluationItem'
import { useJuries } from '../hooks/useJuries'

const JuriesPage = () => {
  const { jury } = useJuries()

  if (!jury) return <h1>Loading</h1>

  return (
    <div>
      <h3>Juries</h3>
      <p>{jury.firstName}</p>
      {jury.evaluations.map((juryOnEvaluation) => (
        <EvaluationItem
          key={juryOnEvaluation.evaluationId + juryOnEvaluation.userId}
          evaluation={juryOnEvaluation.evaluation}
        />
      ))}
    </div>
  )
}

export default JuriesPage
