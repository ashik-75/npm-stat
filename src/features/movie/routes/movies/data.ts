import { Category } from "@/features/movie/types";

export const categories: Category[] = [
	{
		url: "/movies",
		title: "Popular",
		value: "movie/popular",
	},
	{
		url: "/movies/upcoming",
		title: "Upcoming",
		value: "movie/upcoming",
	},
	{
		url: "/movies/trending-movies",
		title: "Trending",
		value: "trending/movie/week",
	},
];
