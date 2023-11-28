import { client } from "@/utils/api-client";

import { useQuery } from "@tanstack/react-query";
import { Credit } from "@/features/movie/types";

const getCredits = (endpoint: string): Promise<Credit> => {
	return client(endpoint);
};

export const useCredit = ({ endpoint }: { endpoint: string }) => {
	return useQuery({
		queryKey: ["credits"],
		queryFn: () => getCredits(endpoint),
	});
};
