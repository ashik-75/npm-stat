import ScrollList from "@/components/list/scroll-list";
import { useCredit } from "@/features/movie/api/credit";
import { CastActor } from "@/features/movie/components/cast-actor";
import React from "react";
import { useParams } from "react-router-dom";

const Cast: React.FC = () => {
	const { movieId } = useParams();
	const credit = useCredit({
		endpoint: `movie/${movieId}/credits`,
	});

	return (
		<ScrollList
			isLoading={credit.isLoading}
			isError={credit.isError}
			items={credit?.data?.cast}
			component={CastActor}
			title="Cast"
		/>
	);
};

export default Cast;
