import React from "react";
import ScrollList from "@/components/list/scroll-list";
import MovieComponent from "@/features/movie/components/movie-comp";
import { useMovies } from "@/features/movie/api/movies";

const WatchList: React.FC = () => {
	const movies = useMovies(
		`account/11765010/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc`
	);

	return (
		<ScrollList
			isLoading={movies.isLoading}
			isError={movies.isError}
			component={MovieComponent}
			items={movies?.data?.results}
			title="Watch List"
		/>
	);
};

export default WatchList;
