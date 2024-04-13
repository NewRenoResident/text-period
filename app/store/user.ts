import { create } from "zustand";

type User = {
  fullName: string;
};

type UserState = {
  user: User;
  updateUser: (newUser: Partial<User>) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: { fullName: "Alex" },
  updateUser: (newUser) =>
    set((state) => ({
      user: { ...state.user, ...newUser },
    })),
}));
