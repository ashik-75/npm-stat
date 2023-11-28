import React from "react";
import { useMovies } from "@/features/movie/api/movies";
import ScrollList from "@/components/list/scroll-list";
import MovieComponent from "@/features/movie/components/movie-comp";

const PopularMovies: React.FC = () => {
	const movies = useMovies("movie/popular");

	return (
		<ScrollList
			items={movies?.data?.results}
			isLoading={movies?.isLoading}
			component={MovieComponent}
			title="Popular Movies"
		/>
	);
};

export default PopularMovies;
