import { client } from "@/utils/api-client";
import { SingleMovie, ApiResponse, Movie } from "@/features/movie/types";
import { ExtractFnReturnType, QueryConfig } from "@/utils/react-query";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { baseInfiniteQuery } from "./base";

const getMovie = ({ movieId }: { movieId: string }): Promise<SingleMovie> => {
	return client(`movie/${movieId}`);
};

type MovieQueryFnType = typeof getMovie;

type useMovieOptions = {
	movieId: string;
	config?: QueryConfig<MovieQueryFnType>;
};

export const useMovie = ({ movieId, config }: useMovieOptions) => {
	return useQuery<ExtractFnReturnType<MovieQueryFnType>>({
		...config,
		queryKey: ["movie", { movieId }],
		queryFn: () => getMovie({ movieId }),
	});
};

const getMovies = (endpoint: string): Promise<ApiResponse<Movie>> => {
	return client(`${endpoint}`);
};

interface MoviesQueryFnType {
	(): ReturnType<typeof getMovies>;
}

type useMoviesOptions = {
	endpoint: string;
	config?: QueryConfig<MoviesQueryFnType>;
};

export const useMovies = ({ endpoint, config }: useMoviesOptions) => {
	return useQuery<ExtractFnReturnType<MoviesQueryFnType>>({
		...config,
		queryKey: ["movies", endpoint],
		queryFn: () => getMovies(endpoint),
	});
};

export const useInfiniteMovies = ({ endpoint }: useMoviesOptions) => {
	const fnc = (page: number) => {
		return getMovies(`${endpoint}?page=${page}`);
	};

	return baseInfiniteQuery<Movie>(["categories", endpoint], fnc);
};
