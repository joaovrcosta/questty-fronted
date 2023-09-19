import { IProfileData } from '@/shared/types'
import { create } from 'zustand'

interface ProfileStore {
  user: IProfileData | null
  setProfile: (user: IProfileData | null) => void
}

export const useProfileStore = create<ProfileStore>((set) => ({
  user: null,
  setProfile: (newProfile: IProfileData | null) => set({ user: newProfile }),
}))
