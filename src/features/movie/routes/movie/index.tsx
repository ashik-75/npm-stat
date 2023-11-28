import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "@/components/ui/Spinner";
import MovieDetails from "./section/movie-details";
import SimilarMovies from "./section/similar-movies";
import Cast from "./section/cast";
import { useGetMovieVideos } from "@/features/movie/api/videos";
import { useMovie } from "@/features/movie/api/movies";
import EmptyState from "@/components/ui/EmptyState";

export const Movie: React.FC = () => {
	const { movieId } = useParams();

	const { data, isLoading } = useMovie({ movieId: movieId! });
	const { data: videos } = useGetMovieVideos({ movieId: movieId! });

	if (isLoading) {
		return <Spinner />;
	}

	if (!data?.id) {
		return <EmptyState />;
	}
	return (
		<div>
			<MovieDetails movie={data} trailerId={videos?.results?.[0]?.key} />
			<br />
			<Cast />
			<br />
			<SimilarMovies />
		</div>
	);
};
