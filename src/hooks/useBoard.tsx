import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ICompetence, getBoard } from '../services/board'

export const useBoard = () => {
  const { id } = useParams()
  const [board, setBoard] = useState<ICompetence>()

  useEffect(() => {
    if (!id) return
    getBoard(id).then(setBoard)
  }, [id])

  return { id, board }
}
