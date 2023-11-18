import { User } from "@/features/auth/types";
import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

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

type CountStore = {
	count: number;
	incrementCount: () => void;
	decrementCount: () => void;
};

export const useCounter = create(
	devtools(
		persist<CountStore>(
			(set) => ({
				count: 0,
				incrementCount: () => set((state) => ({ count: state.count + 1 })),
				decrementCount: () => set((state) => ({ count: state.count - 1 })),
			}),
			{
				name: "counter",
				storage: createJSONStorage(() => localStorage),
			}
		)
	)
);
