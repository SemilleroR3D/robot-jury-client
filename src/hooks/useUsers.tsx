import { useEffect, useMemo, useState } from 'react'
import { getAllUsers } from '../services/User'
import useUserStore from '../store/userStore'
import { UserFetch } from '../types/User'

export const useUsers = ({ role, searchTerm }: { role: string, searchTerm: string }) => {
  const accessToken = useUserStore((state) => state.user?.accessToken)
  const [users, setUsers] = useState<UserFetch[]>([])

  useEffect(() => {
    if (!accessToken) return
    getAllUsers(accessToken).then(setUsers)
  }, [accessToken])

  const visibleUsers = useMemo(() => users
    .filter(
      ({ firstName, lastName, userTypes }) => `${firstName} ${lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) && role === ''
        ? true
        : userTypes.find(userType => userType.name === role))
  , [users, searchTerm, role])

  return { visibleUsers }
}
