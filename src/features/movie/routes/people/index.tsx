import React from "react";
import { useGetPeopleList } from "../../api/people";
import CardList from "@/components/list/card-list";
import PeopleComponent from "@/features/movie/components/people";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/Spinner";

export const People: React.FC = () => {
	const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
		useGetPeopleList({ endpoint: "person/popular" });
	const people_list = data?.pages.map((page) => page.results).flat();

	return (
		<div className="space-y-5">
			<CardList
				items={people_list}
				component={PeopleComponent}
				isLoading={isLoading}
			/>

			{people_list && people_list.length > 0 && (
				<Button
					onClick={() => fetchNextPage()}
					disabled={!hasNextPage || isFetchingNextPage}
					className="space-x-4"
				>
					<span>Load More</span>
					{isFetchingNextPage && <Spinner className="text-white" />}
				</Button>
			)}
		</div>
	);
};
