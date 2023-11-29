import React from "react";
import { useGetTvSeries } from "@/features/movie/api/tv-series";
import Show from "@/features/movie/components/show";
import CardList from "@/components/list/card-list";
import Categories from "../../components/categories";
import { tvShowsCategory } from "./data";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/Spinner";

const TvShows: React.FC = () => {
	const location = useLocation();

	const show =
		tvShowsCategory.find((show) => show.url === location.pathname)?.value ??
		"tv/popular";

	const tvShows = useGetTvSeries(show);

	const tvShowsList = tvShows?.data?.pages.map((page) => page.results).flat();

	return (
		<div className="space-y-5">
			<Categories items={tvShowsCategory} />
			<CardList
				isLoading={tvShows?.isLoading}
				isError={tvShows?.isError}
				items={tvShowsList}
				component={Show}
			/>

			{tvShowsList && tvShowsList?.length > 0 && (
				<Button
					disabled={!tvShows?.hasNextPage}
					onClick={() => tvShows?.fetchNextPage()}
					className="space-x-2"
				>
					<span>Load More</span>
					{tvShows?.isFetchingNextPage && (
						<Spinner size={5} className="text-white" />
					)}
				</Button>
			)}
		</div>
	);
};

export default TvShows;
