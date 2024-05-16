import axios from 'axios'
import { INotes } from './registerCompetition'

export const addNote = async (
  accessToken: string,
  data: INotes
): Promise<INotes> => {
  return (
    await axios.post('/notes', data, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  ).data
}
