import { User } from "@/features/auth/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserStore = {
	user: User | null;
	addUser: (user: User) => void;
	removeUser: () => void;
};

export const useUser = create(
	persist<UserStore>(
		(set) => ({
			user: null,
			addUser: (payload) => set({ user: payload }),
			removeUser: () => set({ user: null }),
		}),
		{
			name: "user",
		}
	)
);
