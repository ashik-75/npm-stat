import React from "react";
import { useSearchParams } from "react-router-dom";
import MoviesListSkeleton from "@/features/movie/components/movies-list-skeleton";
import EmptyMovie from "@/features/movie/components/empty-movie";
import CardList from "@/components/list/card-list";
import MovieComponent from "@/features/movie/components/movie-comp";
import { useMovies } from "@/features/movie/api/movies";

export const SearchMovie: React.FC = () => {
	const [searchParams] = useSearchParams();

	const { data, isLoading } = useMovies({
		endpoint: `/search/movie?query=${searchParams.get("q")}&page=1`,
	});

	if (isLoading) {
		return <MoviesListSkeleton />;
	}

	if (data?.results.length === 0) {
		return <EmptyMovie />;
	}

	return (
		<div>
			<h1 className="text-xl font-semibold">
				Search for : {searchParams.get("q")}
			</h1>
			<br />
			<CardList
				items={data?.results}
				isLoading={isLoading}
				component={MovieComponent}
			/>
		</div>
	);
};
