import axios from 'axios'
import { RegisterData } from '../types/RegisterData'

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
