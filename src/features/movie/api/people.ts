import { ApiResponse, People, Person } from "@/features/movie/types";
import { client } from "@/utils/api-client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const fetchPersonList = (
	endpoint: string | undefined
): Promise<ApiResponse<People>> => {
	return endpoint === undefined
		? Promise.reject(new Error("Something went wrong"))
		: client(endpoint);
};

export const useGetPersonist = (endpoint: string | undefined) => {
	return useInfiniteQuery({
		queryKey: ["person-list", endpoint],
		queryFn: ({ pageParam }) => {
			return fetchPersonList(`${endpoint}?page=${pageParam}`);
		},
		getNextPageParam: (lastPage) => {
			return lastPage.total_pages > lastPage.page ? lastPage.page + 1 : null;
		},
		initialPageParam: 1,
		enabled: Boolean(endpoint),
	});
};

const fetchPerson = (endpoint: string | undefined): Promise<Person> => {
	return endpoint === undefined
		? Promise.reject(new Error("Invalid Person Id"))
		: client(endpoint);
};

export const useGetPeople = (personId: string | undefined) => {
	return useQuery({
		queryKey: ["person", personId],
		queryFn: () => fetchPerson(personId),
		enabled: Boolean(personId),
	});
};
