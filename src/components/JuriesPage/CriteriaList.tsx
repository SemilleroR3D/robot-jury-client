import { ICriterion } from '../../services/juries'
import CriteriaItem from './CriteriaItem'

interface ICriteriaList {
  criteria: ICriterion[];
}

const CriterionList = ({ criteria }: ICriteriaList) => {
  return (
    <>
      {criteria.map((criterion) => (
        <CriteriaItem key={criterion.id} criterion={criterion} />
      ))}
    </>
  )
}

export default CriterionList
