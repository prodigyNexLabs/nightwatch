import { create } from 'zustand'

export type UIState = {
  isNavOpen: boolean
  setNavOpen: (open: boolean) => void
  toggleNav: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isNavOpen: false,
  setNavOpen: (open) => set({ isNavOpen: open }),
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}))
