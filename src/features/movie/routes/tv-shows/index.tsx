import React from "react";
import { useGetTvSeries } from "@/features/movie/api/tv-series";
import Show from "@/features/movie/components/show";
import CardList from "@/components/list/card-list";
import Categories from "../../components/categories";
import { tvShowsCategory } from "./data";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/Spinner";

export const TvShows: React.FC = () => {
	const location = useLocation();

	const show =
		tvShowsCategory.find((show) => show.url === location.pathname)?.value ??
		"tv/popular";

	const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
		useGetTvSeries({
			endpoint: show,
		});

	const shows = data?.pages.map((page) => page.results).flat();

	return (
		<div className="space-y-5">
			<Categories items={tvShowsCategory} />
			<CardList component={Show} items={shows} isLoading={isLoading} />

			{shows && shows?.length > 0 && (
				<Button
					disabled={!hasNextPage}
					onClick={() => fetchNextPage()}
					className="space-x-2"
				>
					<span>Load More</span>
					{isFetchingNextPage && <Spinner size={5} className="text-white" />}
				</Button>
			)}
		</div>
	);
};
