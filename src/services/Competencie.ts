import axios from 'axios'
import { Competencie } from '../types/Competencie'

export const getAllCompetencie = async (accessToken: string): Promise<Competencie[]> => {
  try {
    const response = await axios.get('/competitions', {
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
