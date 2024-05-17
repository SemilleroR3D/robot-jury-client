import { useState } from 'react'
import { IComptetitionRegister } from '../services/board'

const calculateNote = (competitionBoard: IComptetitionRegister[]) => {
  return competitionBoard.map(({ id, notes, participationOrder, robot }) => {
    const total = notes.reduce((acum, curr) => acum + (curr.note * (curr.evaluationCriterion.percent / 100)), 0)
    return { id, notes, participationOrder, robot, total }
  })
}

export const useBoardTable = ({
  competitionBoard
}: {
  competitionBoard: IComptetitionRegister[];
}) => {
  const [score] = useState(calculateNote(competitionBoard))

  return { score }
}
