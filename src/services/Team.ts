import axios from 'axios'

export const getAllTeam = async (accessToken: string) => {
  try {
    const response = await axios.get('/teams', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    console.log(response.data)
    return response.data
  } catch (error: any) {
    console.error(error)
    const errorMessage = error.response.data.message || 'Bad Request'
    throw new Error(errorMessage)
  }
}
