import { ICriterion } from '../../services/juries'
import CriteriaItem from './CriteriaItem'

interface ICriteriaList {
  criteria: ICriterion[];
}

const CriterionList = ({ criteria }: ICriteriaList) => {
  return (
    <div>
      {criteria.map((criterion) => (
        <CriteriaItem key={criterion.id} criterion={criterion} />
      ))}
    </div>
  )
}

export default CriterionList
