import { create } from "zustand";
import { persist } from "zustand/middleware";

type Url = {
	backdrop_w1280?: string;
	backdrop_w780?: string;
	backdrop_w300?: string;
	poster_w185?: string;
	poster_w342?: string;
	poster_w500?: string;
	poster_w780?: string;
	profile?: string;
};

type ImageStote = {
	url: Url;
	setUrl: (payload: Url) => void;
};

export const useImages = create(
	persist<ImageStote>(
		(set) => ({
			url: {},
			setUrl: (payload) => set({ url: payload }),
		}),
		{
			name: "image-sizes",
		}
	)
);
