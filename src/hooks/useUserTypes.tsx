import { useEffect, useState } from 'react'
import { UserType } from '../types/User'
import { getAllRoles } from '../services/Role'
import useUserStore from '../store/userStore'

export const useUserTypes = () => {
  const [userTypes, setUserTypes] = useState<UserType[]>([])
  const accessToken = useUserStore((state) => state.user?.accessToken)

  useEffect(() => {
    if (!accessToken) return
    getAllRoles(accessToken).then(setUserTypes)
  }, [accessToken])

  return { userTypes }
}
