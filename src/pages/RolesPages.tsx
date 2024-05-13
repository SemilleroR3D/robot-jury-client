import { useState, useEffect } from 'react'
import RolList from '../components/RolList'
import { getAllRoles } from '../services/Role'
import useUserStore from '../store/userStore.ts'
import { User, UserType } from '../types/User'

export default function RolesPage () {
  const user = useUserStore(state => state.user) as User

  const [roles, setRoles] = useState<UserType[]>([])

  useEffect(() => {
    const accessToken = user.accessToken

    const fetchRoles = async () => {
      try {
        const rolesData = await getAllRoles(accessToken)
        setRoles(rolesData)
      } catch (error) {
        console.error('Error fetching roles:', error)
      }
    }

    fetchRoles()
  }, [user.accessToken])

  return (
    <>
      <RolList roles={roles} />
    </>
  )
}
