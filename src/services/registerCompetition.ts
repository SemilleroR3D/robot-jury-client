import axios from 'axios'

export interface IRobot {
  id: string;
  name: string;
  description: string;
  img: string;
}

export interface INotes {
  note: number;
  evaluationCriterionId: number;
  competitionRegistrationId: string;
}

export interface IInscription {
  id: string;
  img: string;
  robot: IRobot
  notes: INotes[]
}

export const getInscriptions = async (accessToken: string): Promise<IInscription[]> => {
  return (
    await axios.get('/registercompetition', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  ).data
}
