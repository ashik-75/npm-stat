import { client } from "@/utils/api-client";
import { SingleMovie, ApiResponse, Movie } from "@/features/movie/types";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const fetchMovie = (movieId: string | undefined): Promise<SingleMovie> => {
	return movieId === undefined
		? Promise.reject(new Error("Invalid Id"))
		: client(`movie/${movieId}`);
};

export const useMovie = (movieId: string | undefined) => {
	return useQuery({
		queryKey: ["movie", { movieId }],
		queryFn: () => fetchMovie(movieId),
		enabled: Boolean(movieId),
	});
};

const fetchMovies = (url: string | undefined): Promise<ApiResponse<Movie>> => {
	return url === undefined
		? Promise.reject(new Error("Invalid Url"))
		: client(url);
};

export const useMovies = (endpoint: string | undefined) => {
	return useQuery({
		queryKey: ["movies", endpoint],
		queryFn: () => fetchMovies(endpoint),
		enabled: Boolean(endpoint),
	});
};

export const useInfiniteMovies = (endpoint: string | undefined) => {
	return useInfiniteQuery({
		queryKey: [endpoint],
		queryFn: ({ pageParam }) => fetchMovies(`${endpoint}?page=${pageParam}`),
		enabled: Boolean(endpoint),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.total_pages > lastPage.page ? lastPage.page + 1 : null;
		},
	});
};
