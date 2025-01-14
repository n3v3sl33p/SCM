import { create } from "zustand";
import { IUser } from "@/models/IUser";
import { getUserData } from "@/services/user";

interface UserState {
  user: IUser | null;
  setUser: (data: IUser) => void;
  fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (data) => set(() => ({ user: data })),
  fetchUser: async () => {
    try {
      const response = await getUserData();
      set(() => ({ user: response }));
    } catch (error) {
      throw error;
    }
  },
}));
