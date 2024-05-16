import axios from 'axios'
import { UserType, UserTypeUser } from '../types/User'

export const getAllRoles = async (accessToken: string): Promise<UserType[]> => {
  try {
    const response = await axios.get('/usertypes', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return response.data
  } catch (error: any) {
    const errorMessage = error.response.data.message || 'Bad Request'
    throw new Error(errorMessage)
  }
}

export const getRoleById = async (accessToken: string, id: string) => {
  try {
    const response = await axios.get('/usertypes/' + id, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return response.data
  } catch (error: any) {
    console.error(error)
    const errorMessage = error.response.data.message || 'Bad Request'
    throw new Error(errorMessage)
  }
}

export const postUsertypeUser = async (accessToken: string, data: UserTypeUser) => {
  try {
    const response = await axios.post('/usertypes/user', data, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    console.log(response.data)
    return response.data
  } catch (error: any) {
    console.error(error)
    const errorMessage = error.response?.data?.message || 'Bad Request'
    throw new Error(errorMessage)
  }
}
