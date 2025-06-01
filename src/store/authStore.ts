import { create } from 'zustand';
import { AdminUser } from '../types';
import { supabase } from '../lib/supabase';

interface AuthState {
  user: AdminUser | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  signIn: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      set({ user: { email: data.user.email!, role: 'admin' } });
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  signOut: async () => {
    set({ isLoading: true });
    try {
      await supabase.auth.signOut();
      set({ user: null });
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      set({ isLoading: false });
    }
  },
}));