import { create } from "zustand";
import { ISessionUser } from "../components/Nav/Nav";

type UserState = {
  sessionUser: ISessionUser | {};
  setSessionUser: (newSessionUser: ISessionUser) => void;
};

export const useSessionUserStore = create<UserState>((set) => ({
  sessionUser: {},
  setSessionUser: (newSessionUser: ISessionUser) =>
    set({ sessionUser: newSessionUser }),
}));
