import { ApiResponse, People, Person } from "@/features/movie/types";
import { client } from "@/utils/api-client";
import { QueryConfig } from "@/utils/react-query";
import { baseQuery, baseInfiniteQuery } from "./base";

const getPeopleList = (endpoint: string): Promise<ApiResponse<People>> => {
	return client(endpoint);
};

interface QueryFnType {
	(): ReturnType<typeof getPeopleList>;
}

interface UseGetPeopleLisOptions {
	endpoint: string;
	config?: QueryConfig<QueryFnType>;
}

export const useGetPeopleList = ({ endpoint }: UseGetPeopleLisOptions) => {
	return baseInfiniteQuery(["people", endpoint], (page) =>
		getPeopleList(`${endpoint}?page=${page}`)
	);
};

const getPeople = (endpoint: string): Promise<Person> => {
	return client(endpoint);
};

interface GetPeopleQueryFnType {
	(): ReturnType<typeof getPeople>;
}

interface UseGetPeopleOptions {
	endpoint: string;
	config?: QueryConfig<GetPeopleQueryFnType>;
}

export const useGetPeople = ({ endpoint }: UseGetPeopleOptions) => {
	return baseQuery(["person", endpoint], () => getPeople(endpoint));
};
