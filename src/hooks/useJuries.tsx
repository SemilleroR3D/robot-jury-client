import { useEffect, useState } from 'react'
import useUserStore from '../store/userStore'
import { IJury, getMe } from '../services/juries'
import { getInscriptions } from '../services/registerCompetition'
import { useInscriptionStore } from '../store/inscriptionStore'
import { useCriterionStore } from '../store/criterionStore'

export const useJuries = () => {
  const accessToken = useUserStore((state) => state.user?.accessToken)
  const [jury, setJury] = useState<IJury>()
  const setInscriptions = useInscriptionStore((state) => state.setInscriptions)
  const setCriteria = useCriterionStore((state) => state.setCriteria)

  useEffect(() => {
    if (!accessToken) return
    getMe(accessToken).then((jury) => {
      setJury(jury)
      setCriteria(jury.evaluations.flatMap((evaluation) => evaluation.evaluation.evaluationCriterions))
    })
    getInscriptions(accessToken).then(setInscriptions)
  }, [accessToken, setInscriptions, setCriteria])

  return { jury }
}
