import { IEvaluation } from '../../services/juries'
import CriterionList from './CriteriaList'

interface IEvaluationItem {
  evaluation: IEvaluation
}

const EvaluationItem = ({ evaluation }: IEvaluationItem) => {
  return (
    <div>
      <h3>{evaluation.name}</h3>
      <CriterionList criteria={evaluation.evaluationCriterions} />
    </div>
  )
}

export default EvaluationItem
