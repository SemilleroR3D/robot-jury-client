import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Rol = {
  description: string;
  id: string;
  name: string;
  status: boolean;
};

type User = {
  accessToken: string;
  email: string;
  firtName: string;
  lastName: string;
  rol: Rol | null;
};

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
