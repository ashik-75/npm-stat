import React from "react";

import Rating from "@/features/movie/components/rating";
import { useImages } from "@/store/image-sizes";
import { formatDate, movieDuration } from "@/utils/helper";
import LazyImage from "@/components/ui/LazyImage";
import TrailerBox from "./trailer-box";
import { SingleMovie } from "@/features/movie/types";

type MovieDetailsProps = {
	movie: SingleMovie;
	trailerId?: string;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, trailerId }) => {
	const images = useImages((state) => state.url);
	return (
		<div>
			<div className="grid grid-cols-1 tablet:grid-cols-3 gap-5">
				<LazyImage
					src={`${images.poster_w780}${movie.poster_path}`}
					alt={movie.original_title}
					className="rounded-xl"
				/>

				<div className="tablet:col-span-2 space-y-5">
					<h1 className="text-2xl font-bold">{movie.original_title}</h1>
					<p>{movie.overview}</p>
					<div className="flex flex-wrap gap-3">
						{movie.genres.map((ge) => (
							<span key={ge.id}>{ge.name}</span>
						))}
					</div>
					<div className="grid grid-cols-2 gap-5 lg:grid-cols-4 items-center">
						<div>
							<h1 className="uppercase text-sm font-bold">Rating</h1>
							<Rating value={movie.vote_average} />
						</div>
						<div>
							<h1 className="uppercase text-sm font-bold">Release date</h1>
							<p>{formatDate(movie.release_date)}</p>
						</div>

						<div>
							<h1 className="uppercase text-sm font-bold">Duration</h1>
							<p>{movieDuration(movie.runtime)}</p>
						</div>

						<TrailerBox trailerId={trailerId} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
