import React from "react";
import { useGetShowDetails } from "../../api/tv-series";
import { useParams } from "react-router-dom";
import Spinner from "@/components/ui/Spinner";
import LazyImage from "@/components/ui/LazyImage";
import { useImages } from "@/store/image-sizes";

export const TvShowsDetails: React.FC = () => {
	const { showId } = useParams();
	const images = useImages((state) => state.url);
	const { data: show, isLoading } = useGetShowDetails({ showId: showId! });

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className="grid grid-cols-1 gap-5 tablet:grid-cols-2 space-y-5">
			<div>
				<LazyImage
					src={`${images?.poster_w780}${show?.poster_path}`}
					alt={show?.name}
					className="rounded-xl"
				/>
			</div>

			<div>
				<h1>{show?.name}</h1>
				<p>{show?.origin_country}</p>
			</div>
		</div>
	);
};
