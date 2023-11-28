import ScrollList from "@/components/list/scroll-list";
import { useCredit } from "@/features/movie/api/credit";
import { CastActor } from "@/features/movie/components/cast-actor";
import React from "react";
import { useParams } from "react-router-dom";

const Cast: React.FC = () => {
	const { movieId } = useParams();
	const { data, isLoading } = useCredit({
		endpoint: `movie/${movieId}/credits`,
	});

	return (
		<>
			<ScrollList
				items={data?.cast}
				isLoading={isLoading}
				component={CastActor}
				title="Cast"
			/>
		</>
	);
};

export default Cast;
