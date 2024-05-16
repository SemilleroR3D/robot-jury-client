import { Navigate, useParams } from 'react-router-dom'
import { useCriterionStore } from '../store/criterionStore'
import { useInscriptionStore } from '../store/inscriptionStore'
import InscriptionItem from '../components/CalificationPage/InscriptionItem'
import { useState } from 'react'

const CalificationPage = () => {
  const inscriptions = useInscriptionStore((state) => state.inscriptions)
  const criteria = useCriterionStore((state) => state.criteria)
  const { id } = useParams()
  const [criterion] = useState(criteria.find((criterion) => criterion.id === Number(id)))

  if (!criteria.length || !criterion) return <Navigate to='/juries' />

  return (
    <div>
      <h1>{criterion.name}</h1>
      <p>{`Tiene un peso en porcentage de: ${criterion.percent}%`}</p>
      {inscriptions.map((inscription) => (
        <InscriptionItem key={inscription.id} inscription={inscription} criterion={criterion} />
      ))}
    </div>
  )
}

export default CalificationPage
