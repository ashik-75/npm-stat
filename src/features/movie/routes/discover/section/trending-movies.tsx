import React from "react";
import { useMovies } from "@/features/movie/api/movies";
import ScrollList from "@/components/list/scroll-list";
import MovieComponent from "@/features/movie/components/movie-comp";

const TrendingMovies: React.FC = () => {
	const movies = useMovies("trending/movie/week");

	return (
		<ScrollList
			items={movies?.data?.results}
			isLoading={movies.isLoading}
			component={MovieComponent}
			title="Trending Movies"
		/>
	);
};

export default TrendingMovies;
