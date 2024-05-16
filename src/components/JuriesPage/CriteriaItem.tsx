import { Link } from 'react-router-dom'
import { ICriterion } from '../../services/juries'

interface ICriteriaItem {
  criterion: ICriterion
}

const CriteriaItem = ({ criterion }: ICriteriaItem) => {
  return (
    <Link to={`/juries/${criterion.id}`}>
      <h6>{criterion.name}</h6>
      <p>{`Valor en porcentaje: ${criterion.percent}`}</p>
    </Link>
  )
}

export default CriteriaItem
