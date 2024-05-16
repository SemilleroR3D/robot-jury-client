import { useEffect, useState } from 'react'
import { Competencie } from '../types/Competencie'
import { getAllCompetencie } from '../services/Competencie'
import useUserStore from '../store/userStore'

export const useCompetencie = () => {
  const [Competencie, setCompetencie] = useState<Competencie[]>([])
  const accessToken = useUserStore((state) => state.user?.accessToken)

  useEffect(() => {
    if (!accessToken) return
    getAllCompetencie(accessToken).then(setCompetencie)
  }, [accessToken])

  return { Competencie }
}
