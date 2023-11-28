import React from "react";

const MoviesListSkeleton: React.FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 md:gap-5">
			{[...Array(4).keys()].map((n) => (
				<MovieSkeleton key={n} />
			))}
		</div>
	);
};

export default MoviesListSkeleton;

const MovieSkeleton = () => {
	return <div>Loading ...</div>;
};
