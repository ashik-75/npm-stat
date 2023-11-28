import React from "react";
import { useMovies } from "@/features/movie/api/movies";
import ScrollList from "@/components/list/scroll-list";
import MovieComponent from "@/features/movie/components/movie-comp";

const PopularMovies: React.FC = () => {
	const { data, isLoading } = useMovies({
		endpoint: `movie/popular`,
	});

	return (
		<ScrollList
			items={data?.results}
			isLoading={isLoading}
			component={MovieComponent}
			title="Popular Movies"
		/>
	);
};

export default PopularMovies;
