import email from "next-auth/providers/email";
import { create } from "zustand";

interface User {
  id: string;
  email: string;
  name: string;
}
interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  setUserId: (id: string) => void;
  setUserEmail: (email: string) => void;
  setUserName: (name: string) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  setUserId: (id) =>
    set((state) => ({
      user: { ...(state.user ?? { email: "", name: "" }), id },
    })),
  setUserEmail: (email) =>
    set((state) => ({
      user: { ...(state.user ?? { id: "", name: "" }), email },
    })),
  setUserName: (name) =>
    set((state) => ({
      user: { ...(state.user ?? { id: "", email: "" }), name },
    })),
}));

export default useUserStore;
