import React, { useState } from "react";
import { useGetPeople } from "@/features/movie/api/people";
import { useParams } from "react-router-dom";
import LazyImage from "@/components/ui/LazyImage";
import { useImages } from "@/store/image-sizes";
import Spinner from "@/components/ui/Spinner";

export const PersonDetails: React.FC = () => {
	const { personId } = useParams();
	const [length, setLength] = useState(500);
	const { data: person, isLoading } = useGetPeople({
		endpoint: `person/${personId}`,
	});
	const images = useImages((state) => state.url);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className="grid grid-cols-1 gap-5 tablet:grid-cols-2">
			<div>
				<LazyImage
					src={`${images?.poster_w780}${person?.profile_path}`}
					alt={person?.name}
					className="rounded-xl"
				/>
			</div>

			<div className="space-y-4">
				<p className="font-bold text-4xl">{person?.name}</p>
				<div className="text-sm">
					{person?.biography && person?.biography?.length > length ? (
						<div>
							<span>{person?.biography?.slice(0, length)}</span>
							<button onClick={() => setLength(-1)}>...</button>
						</div>
					) : (
						person?.biography
					)}
				</div>
				<p>Profession: {person?.known_for_department}</p>
				<div>
					{person?.also_known_as?.map((k) => (
						<div key={k}>
							<p>{k}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
