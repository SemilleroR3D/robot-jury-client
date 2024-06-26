import axios from 'axios'
import { IEvaluation } from './juries'

export interface IRobot {
  id: string;
  name: string;
}

export interface IParticipationOrder {
  id: number;
  try: number;
  place: number;
  isRunning: boolean;
}

export interface ICriterion {
  id: number;
  name: string;
  percent: number;
  evaluationId: string;
  evaluation: IEvaluation;
}

export interface INote {
  note: number;
  evaluationCriterion: ICriterion;
}

export interface IComptetitionRegister {
  id: string;
  total: number;
  participationOrder: IParticipationOrder;
  robot: IRobot;
  notes: INote[];
}

export interface IBanner {
  url: string;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  competitionRegistrations: IComptetitionRegister[];
}

export interface ICompetence {
  id: string;
  name: string;
  description: string;
  startDate: string;
  banners: IBanner[];
  categories: ICategory[];
}

export const getBoard = async (id: string): Promise<ICompetence> => (await axios.get(`/board/${id}`)).data
