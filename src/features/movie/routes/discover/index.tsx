import React from "react";
import PopularMovies from "./section/popular-movies";
import TrendingMovies from "./section/trending-movies";

const Discover: React.FC = () => {
	return (
		<div className="space-y-5">
			<PopularMovies />
			<TrendingMovies />
		</div>
	);
};

export default Discover;
