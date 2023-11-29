import React from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "@/components/list/card-list";
import MovieComponent from "@/features/movie/components/movie-comp";
import { useMovies } from "@/features/movie/api/movies";

const SearchMovie: React.FC = () => {
	const [searchParams] = useSearchParams();

	const movies = useMovies(
		`/search/movie?query=${searchParams.get("q")}&page=1`
	);

	return (
		<div>
			<h1 className="text-xl font-semibold">
				Search for : {searchParams.get("q")}
			</h1>
			<br />
			<CardList
				isLoading={movies.isLoading}
				isError={movies.isError}
				items={movies?.data?.results}
				component={MovieComponent}
			/>
		</div>
	);
};

export default SearchMovie;
