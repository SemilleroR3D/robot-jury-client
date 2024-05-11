import * as React from 'react'
import { Navigate } from 'react-router-dom'
import useUserStore from '../src/store/userStore.ts'
import { User } from './types/User'

interface AuthContexProps {
    children: React.ReactNode
}

export default function AuthContext ({ children }: AuthContexProps) {
  const user = useUserStore((state) => state.user) as User

  if (!!user && user.rol?.name === 'Admin') {
    return <>{children}</>
  }

  return <Navigate to='/login' />
}
