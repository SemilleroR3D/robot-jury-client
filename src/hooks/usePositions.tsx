import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ICompetition, getPositions } from '../services/positions'

export const usePositions = () => {
  const { id } = useParams()
  const [competition, setCompetition] = useState<ICompetition>()

  useEffect(() => {
    if (!id) return
    getPositions(id).then(setCompetition)
  }, [id])

  return { competition }
}
