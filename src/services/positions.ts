import axios from 'axios'

export interface IParticipationOrder {
  id: number;
  isRunning: boolean;
  place: number;
  try: number;
}

export interface IRobot {
  id: string;
  name: string;
}

export interface ICompetitionRegistration {
  id: string;
  participationOrder: IParticipationOrder;
  robot: IRobot;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  competitionRegistrations: ICompetitionRegistration[];
}

export interface ICompetition {
  id: string;
  name: string;
  description: string;
  categories: ICategory[];
}

export const getPositions = async (id: string): Promise<ICompetition> => {
  return (await axios.get(`/board/positions/${id}`)).data
}

export const setTry = async ({
  id,
  accessToken,
  data
}: {
  id: number;
  accessToken: string;
  data: Partial<IParticipationOrder>;
}): Promise<IParticipationOrder> => {
  return (
    await axios.patch(`/positions/${id}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  ).data
}

export const changeRunning = async ({
  id,
  accessToken,
  data
}: {
  id: number;
  accessToken: string;
  data: Partial<IParticipationOrder>;
}): Promise<IParticipationOrder> => {
  return (
    await axios.patch(`/positions/${id}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  ).data
}
