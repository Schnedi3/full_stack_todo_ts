import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create(
  persist<IAuthStore>(
    (set) => ({
      isAuthenticated: false,
      setIsAuthenticated: (isAuthenticated: boolean) =>
        set({ isAuthenticated }),
    }),
    {
      name: 'user-auth',
    }
  )
);
