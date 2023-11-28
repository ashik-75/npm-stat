import React from "react";
import ScrollList from "@/components/list/scroll-list";
import MovieComponent from "@/features/movie/components/movie-comp";
import { useMovies } from "@/features/movie/api/movies";

export const FavouriteList: React.FC = () => {
	const { data, isLoading } = useMovies({
		endpoint: "account/11765010/favorite/movies?sort_by=created_at.desc",
	});

	return (
		<ScrollList
			isLoading={isLoading}
			component={MovieComponent}
			items={data?.results}
		/>
	);
};
