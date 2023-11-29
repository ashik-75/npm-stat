import React from "react";
import { useGetShowDetails } from "../../api/tv-series";
import { useParams } from "react-router-dom";
import Spinner from "@/components/ui/Spinner";
import LazyImage from "@/components/ui/LazyImage";
import { useImages } from "@/store/image-sizes";
import ErrorMessage from "@/components/ui/ErrorMessage";
import EmptyState from "@/components/ui/EmptyState";

const TvShowsDetails: React.FC = () => {
	const { showId } = useParams();
	const images = useImages((state) => state.url);
	const show = useGetShowDetails(showId);

	if (show.isError) {
		return <ErrorMessage />;
	}

	if (show.isLoading && !show.data) {
		return <Spinner />;
	}

	if (!show.data?.id) {
		return <EmptyState />;
	}

	return (
		<div className="grid grid-cols-1 gap-5 tablet:grid-cols-2 space-y-5">
			<div>
				<LazyImage
					src={`${images?.poster_w780}${show?.data?.poster_path}`}
					alt={show?.data?.name}
					className="rounded-xl"
				/>
			</div>

			<div>
				<h1>{show?.data?.name}</h1>
				<p>{show?.data?.origin_country}</p>
			</div>
		</div>
	);
};

export default TvShowsDetails;
