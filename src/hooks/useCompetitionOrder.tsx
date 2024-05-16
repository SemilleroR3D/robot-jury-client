import { IParticipationOrder, setTry } from '../services/positions'
import useUserStore from '../store/userStore'

interface IuseCompetitionOrder {
  addTry: (id: number, currentTry: number) => Promise<IParticipationOrder>;
  removeTry: (id: number, currentTry: number) => Promise<IParticipationOrder>;
  changeRunning: (
    id: number,
    isRunning: boolean
  ) => Promise<IParticipationOrder>;
}

export const useCompetitionOrder = (): IuseCompetitionOrder => {
  const accessToken = useUserStore((state) => state.user?.accessToken)

  const addTry = (id: number, currentTry: number) => {
    return setTry({
      id,
      accessToken: accessToken || '',
      data: { try: currentTry + 1 }
    })
  }

  const removeTry = (id: number, currentTry: number) => {
    return setTry({
      id,
      accessToken: accessToken || '',
      data: { try: currentTry - 1 }
    })
  }

  const changeRunning = (id: number, isRunning: boolean) => {
    return setTry({
      id,
      accessToken: accessToken || '',
      data: { isRunning: !isRunning }
    })
  }
  return { addTry, removeTry, changeRunning }
}
