import { client } from "@/utils/api-client";
import { Videos } from "@/features/movie/types";
import { ExtractFnReturnType, QueryConfig } from "@/utils/react-query";
import { useQuery } from "@tanstack/react-query";

const getVideos = (endpoint: string): Promise<Videos> => {
	return client(endpoint);
};

interface QueryFnType {
	(): ReturnType<typeof getVideos>;
}

interface UseVideosOptins {
	movieId: string;
	config?: QueryConfig<QueryFnType>;
}

export const useGetMovieVideos = ({ movieId }: UseVideosOptins) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		queryKey: ["movie-videos", { movieId }],
		queryFn: () => getVideos(`movie/${movieId}/videos`),
	});
};
