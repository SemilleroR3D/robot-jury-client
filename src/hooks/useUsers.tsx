import { useEffect, useState } from 'react'
import { getAllUsers } from '../services/User'
import useUserStore from '../store/userStore'
import { UserFetch } from '../types/User'

export const useUsers = () => {
  const accessToken = useUserStore((state) => state.user?.accessToken)
  const [users, setUsers] = useState<UserFetch[]>([])

  useEffect(() => {
    if (!accessToken) return
    getAllUsers(accessToken).then(setUsers)
  }, [accessToken])

  return { users }
}
