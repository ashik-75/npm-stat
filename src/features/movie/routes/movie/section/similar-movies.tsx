import React from "react";
import { useParams } from "react-router-dom";
import MovieComponent from "@/features/movie/components/movie-comp";
import ScrollList from "@/components/list/scroll-list";
import { useMovies } from "@/features/movie/api/movies";

const SimilarMovies: React.FC = () => {
	const { movieId } = useParams();
	const { data, isLoading } = useMovies(`movie/${movieId}/similar`);

	return (
		<ScrollList
			items={data?.results}
			isLoading={isLoading}
			component={MovieComponent}
			title="Similiar Movies"
		/>
	);
};

export default SimilarMovies;
