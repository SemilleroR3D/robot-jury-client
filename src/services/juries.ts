import axios from 'axios'

export interface ICriterion {
  id: number;
  name: string;
  percent: number;
}

export interface IEvaluation {
  id: string;
  name: string;
  description: string;
  percent: number;
  evaluationCriterions: ICriterion[]
}

export interface IJuryEvaluation {
  status: true;
  evaluation: IEvaluation
  evaluationId: string;
  userId: string;
}

export interface IJury {
  id: string;
  firstName: string;
  evaluations: IJuryEvaluation[]
}

export const getMe = async (accessToken: string): Promise<IJury> => {
  return (
    await axios.get('/juries/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  ).data
}
