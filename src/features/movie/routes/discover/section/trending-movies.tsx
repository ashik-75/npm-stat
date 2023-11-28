import React from "react";
import { useMovies } from "@/features/movie/api/movies";
import ScrollList from "@/components/list/scroll-list";
import MovieComponent from "@/features/movie/components/movie-comp";

const TrendingMovies: React.FC = () => {
	const { data, isLoading } = useMovies({
		endpoint: `trending/movie/week`,
	});

	return (
		<ScrollList
			items={data?.results}
			isLoading={isLoading}
			component={MovieComponent}
			title="Trending Movies"
		/>
	);
};

export default TrendingMovies;
