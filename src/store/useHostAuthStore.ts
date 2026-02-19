import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { HostSession, HostUser } from '../types/host'

type HostAuthState = {
  session: HostSession | null
  hostUser: HostUser | null
  login: (session: HostSession, hostUser?: HostUser | null) => void
  updateHostUser: (hostUser: HostUser) => void
  logout: () => void
}

export const useHostAuthStore = create<HostAuthState>()(
  persist(
    (set) => ({
      session: null,
      hostUser: null,
      login: (session, hostUser = null) => set({ session, hostUser }),
      updateHostUser: (hostUser) => set({ hostUser }),
      logout: () => set({ session: null, hostUser: null }),
    }),
    {
      name: 'crozroad-host-auth-v1',
      partialize: (state) => ({
        session: state.session,
        hostUser: state.hostUser,
      }),
    },
  ),
)

export const selectIsHostAuthenticated = (state: HostAuthState) =>
  Boolean(state.session?.accessToken)
