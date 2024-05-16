import { create } from 'zustand'
import { IInscription } from '../services/registerCompetition'

interface InscriptionState {
  inscriptions: IInscription[];
  setInscriptions: (inscriptions: IInscription[]) => void;
}

export const useInscriptionStore = create<InscriptionState>()((set) => ({
  inscriptions: [],
  setInscriptions: (inscriptions) =>
    set(() => ({
      inscriptions
    }))
}))
