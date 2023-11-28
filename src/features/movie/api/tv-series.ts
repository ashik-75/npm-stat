import { client } from "@/utils/api-client";
import { ApiResponse, Show, ShowDetails } from "@/features/movie/types";
import { QueryConfig } from "@/utils/react-query";
import { baseInfiniteQuery, baseQuery, queryClient } from "./base";

const getTvSeries = (endpoint: string): Promise<ApiResponse<Show>> => {
	return client(endpoint);
};

interface QueryFnType {
	(): ReturnType<typeof getTvSeries>;
}

interface UseGetTvSeriesOptions {
	endpoint: string;
	config?: QueryConfig<QueryFnType>;
}

export const useGetTvSeries = ({ endpoint, config }: UseGetTvSeriesOptions) => {
	const fnc = (page: number) => {
		return queryClient<ApiResponse<Show>>(`${endpoint}?page=${page}`);
	};
	return baseInfiniteQuery(["tv-series", endpoint], fnc);
};

export const useGetShowDetails = ({ showId }: { showId: string }) => {
	return baseQuery(["person", showId], () =>
		queryClient<ShowDetails>(`tv/${showId}`)
	);
};
