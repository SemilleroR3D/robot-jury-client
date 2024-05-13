import axios from 'axios'
import { RegisterData } from '../types/RegisterData'
import { UserFetch } from '../types/User'

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await axios.post('/users', data)
    console.log(response.data)
    return response.data
  } catch (error:any) {
    console.error(error)
    const errorMessage = error.response.data.message || 'Bad Request'
    throw new Error(errorMessage)
  }
}

export const getAllUsers = async (accessToken: string): Promise<UserFetch[]> => {
  try {
    const response = await axios.get('/users/drafts', {
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
