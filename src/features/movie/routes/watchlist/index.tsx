import React from "react";
import ScrollList from "@/components/list/scroll-list";
import MovieComponent from "@/features/movie/components/movie-comp";
import { useMovies } from "@/features/movie/api/movies";

export const WatchList: React.FC = () => {
	const { data, isLoading } = useMovies({
		endpoint: `account/11765010/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc`,
	});

	return (
		<ScrollList
			isLoading={isLoading}
			component={MovieComponent}
			items={data?.results}
			title="Watch List"
		/>
	);
};
