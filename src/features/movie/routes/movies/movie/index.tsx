import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "@/components/ui/Spinner";
import MovieDetails from "./section/movie-details";
import SimilarMovies from "./section/similar-movies";
import Cast from "./section/cast";
import { useGetMovieVideos } from "@/features/movie/api/videos";
import { useMovie } from "@/features/movie/api/movies";
import EmptyState from "@/components/ui/EmptyState";

const Movie: React.FC = () => {
	const { movieId } = useParams();

	const movie = useMovie(movieId);
	const movieVideos = useGetMovieVideos(movieId);

	if (movie.isLoading) {
		return <Spinner />;
	}

	if (!movie.data?.id) {
		return <EmptyState />;
	}
	return (
		<div>
			<MovieDetails
				movie={movie.data}
				trailerId={movieVideos?.data?.results?.[0]?.key}
			/>
			<br />
			<Cast />
			<br />
			<SimilarMovies />
		</div>
	);
};

export default Movie;