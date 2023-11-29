import React from "react";
import { useMovies } from "@/features/movie/api/movies";
import ScrollList from "@/components/list/scroll-list";
import MovieComponent from "@/features/movie/components/movie-comp";

const PopularMovies: React.FC = () => {
	const movies = useMovies("movie/popular");

	return (
		<ScrollList
			title="Popular Movies"
			isLoading={movies?.isLoading}
			isError={movies.isError}
			items={movies?.data?.results}
			component={MovieComponent}
		/>
	);
};

export default PopularMovies;
