import React from "react";
import { useMovies } from "@/features/movie/api/movies";
import ScrollList from "@/components/list/scroll-list";
import MovieComponent from "@/features/movie/components/movie-comp";

const TrendingMovies: React.FC = () => {
	const movies = useMovies("trending/movie/week");

	return (
		<ScrollList
			title="Trending Movies"
			isLoading={movies.isLoading}
			isError={movies.isError}
			items={movies?.data?.results}
			component={MovieComponent}
		/>
	);
};

export default TrendingMovies;
