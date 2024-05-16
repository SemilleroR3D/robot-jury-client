import { create } from 'zustand'
import { ICriterion } from '../services/juries'

interface CriterionState {
  criteria: ICriterion[];
  setCriteria: (criteria: ICriterion[]) => void;
}

export const useCriterionStore = create<CriterionState>()((set) => ({
  criteria: [],
  setCriteria: (criteria) =>
    set(() => ({
      criteria
    }))
}))
