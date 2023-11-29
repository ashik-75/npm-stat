import React from "react";
import { useParams } from "react-router-dom";
import MovieComponent from "@/features/movie/components/movie-comp";
import ScrollList from "@/components/list/scroll-list";
import { useMovies } from "@/features/movie/api/movies";

const SimilarMovies: React.FC = () => {
	const { movieId } = useParams();
	const movies = useMovies(`movie/${movieId}/similar`);

	return (
		<ScrollList
			title="Similiar Movies"
			isLoading={movies.isLoading}
			isError={movies.isError}
			items={movies.data?.results}
			component={MovieComponent}
		/>
	);
};

export default SimilarMovies;
