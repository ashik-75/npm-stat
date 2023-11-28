import { client } from "@/utils/api-client";
import { Videos } from "@/features/movie/types";
import { useQuery } from "@tanstack/react-query";

const getVideos = (endpoint: string | undefined): Promise<Videos> => {
	return endpoint === undefined
		? Promise.reject(new Error("Invalid URL"))
		: client(endpoint);
};

export const useGetMovieVideos = (movieId: string | undefined) => {
	return useQuery({
		queryKey: ["movie-videos", { movieId }],
		queryFn: () => getVideos(`movie/${movieId}/videos`),
		enabled: Boolean(movieId),
	});
};
