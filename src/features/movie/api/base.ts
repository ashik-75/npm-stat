import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { ApiResponse } from "@/features/movie/types";
import { client } from "@/utils/api-client";

export const useBaseQuery = <T>(
	queryKey: string[],
	queryFn: () => Promise<T>
) => {
	return useQuery({
		queryKey,
		queryFn,
	});
};

export const useBaseInfiniteQuery = <T>(
	queryKey: string[],
	fn: (payload: number) => Promise<ApiResponse<T>>
) => {
	return useInfiniteQuery({
		queryKey,
		queryFn: ({ pageParam }) => {
			return fn(pageParam);
		},
		getNextPageParam: (lastPage) => {
			return lastPage.total_pages > lastPage.page ? lastPage.page + 1 : null;
		},
		initialPageParam: 1,
	});
};

export const queryClient = <T>(endpoint: string): Promise<T> => {
	return client(endpoint);
};
