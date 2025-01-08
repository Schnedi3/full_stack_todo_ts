import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  userId: string;
  setUserId: (userId: string) => void;
}

export const useAuthStore = create(
  persist<IAuthStore>(
    (set) => ({
      isAuthenticated: false,
      setIsAuthenticated: (isAuthenticated: boolean) =>
        set({ isAuthenticated }),
      userId: '',
      setUserId: (userId: string) => set({ userId }),
    }),
    {
      name: 'user-auth',
    }
  )
);
