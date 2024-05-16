import axios from 'axios'
import { ICompetition } from '../types/Competencie'

export const getAllCompetencie = async (accessToken: string): Promise<ICompetition> => {
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
