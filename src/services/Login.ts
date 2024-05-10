import axios from 'axios'
import { LoginData } from '../types/LoginData'

export const loginUser = async (data: LoginData) => {
  try {
    const response = await axios.post('/auth/login', data)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
