import { useState } from 'react'
import { IComptetitionRegister } from '../services/board'

export const useBoardTable = ({
  competitionBoard
}: {
  competitionBoard: IComptetitionRegister[];
}) => {
  const [score, setScore] = useState(
    competitionBoard.map(({ notes, ...rest }) => {
      const evaluationsMap: any = {}

      notes.forEach((noteItem) => {
        const criterion = noteItem.evaluationCriterion
        const evaluationId = criterion.evaluationId
        const notePonderada = noteItem.note * (criterion.percent / 100)

        if (!evaluationsMap[evaluationId]) {
          evaluationsMap[evaluationId] = {
            evaluation: criterion.evaluation,
            totalPonderada: 0
          }
        }

        evaluationsMap[evaluationId].totalPonderada += notePonderada
      })

      let total = 0
      for (const evaluationId in evaluationsMap) {
        const evaluation = evaluationsMap[evaluationId].evaluation
        const totalPonderada = evaluationsMap[evaluationId].totalPonderada
        const notaFinal = totalPonderada * (evaluation.percent / 100)
        total += notaFinal
      }

      return { ...rest, notes, total }
    })
  )

  const orderByTry = () => {
    setScore([
      ...score.sort(
        (a, b) => a.participationOrder.try - b.participationOrder.try
      )
    ])
  }

  const orderByPlace = () => {
    setScore([
      ...score.sort(
        (a, b) => a.participationOrder.place - b.participationOrder.place
      )
    ])
  }

  const orderByTotal = () => {
    setScore([...score.sort((a, b) => b.total - a.total)])
  }

  return { score, orderByTry, orderByPlace, orderByTotal }
}
