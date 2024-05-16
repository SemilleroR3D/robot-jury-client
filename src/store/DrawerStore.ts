import { create } from 'zustand'

type DrawerState = {
  open: boolean;
  setOpen: (open: boolean) => void;
  drawerWidth: number;
  setDrawerWidth: (width: number) => void;
};

const useDrawerStore = create<DrawerState>((set) => ({
  open: false,
  setOpen: (open: boolean) => set(() => ({ open })),
  drawerWidth: 240,
  setDrawerWidth: (width: number) => set(() => ({ drawerWidth: width }))
}))

export default useDrawerStore
