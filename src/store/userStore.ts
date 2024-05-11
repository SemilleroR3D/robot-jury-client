import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '../types/User'

type Store = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const useUserStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user })
    }),
    { name: 'bearStore' }
  )
)

export default useUserStore
