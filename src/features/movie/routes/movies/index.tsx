import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CardList from "@/components/list/card-list";
import MovieComponent from "@/features/movie/components/movie-comp";
import { useInfiniteMovies } from "@/features/movie/api/movies";
import Categories from "../../components/categories";
import { categories } from "./data";
import Spinner from "@/components/ui/Spinner";

const categoryEndpoints: Record<string, string> = {
	"popular-movies": "movie/popular",
	"trending-movies": "trending/movie/week",
	upcoming: "movie/upcoming",
};

export const Movies: React.FC = () => {
	const params = useParams<{ category: string }>();

	const endpoint = categoryEndpoints[params.category ?? "popular-movies"];

	const {
		data,
		isLoading,
		isError,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
	} = useInfiniteMovies({ endpoint });

	if (isError) return <div>Error</div>;

	const movies = data?.pages.map((page) => page.results).flat();

	return (
		<div className="space-y-5">
			<Categories items={categories} />

			<CardList
				isLoading={isLoading}
				items={movies}
				component={MovieComponent}
			/>

			{movies && movies.length > 0 && (
				<Button
					disabled={!hasNextPage || isFetchingNextPage}
					onClick={() => fetchNextPage()}
					className="space-x-2"
				>
					<span>{hasNextPage ? "Load More" : "No Data!"}</span>

					{isFetchingNextPage && <Spinner className="text-white" />}
				</Button>
			)}
		</div>
	);
};
