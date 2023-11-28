import { Category } from "@/features/movie/types";

export const tvShowsCategory: Category[] = [
	{
		url: "/tv-shows",
		title: "Popular",
		value: "tv/popular",
	},
	{
		url: "/tv-shows/airing-today",
		title: "Airing Today",
		value: "tv/airing_today",
	},
	{
		url: "/tv-shows/top-rated",
		title: "Top Rated",
		value: "tv/top_rated",
	},
	{
		url: "/tv-shows/on-tv",
		title: "On Tv",
		value: "tv/on_the_air",
	},
];
