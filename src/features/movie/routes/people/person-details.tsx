import React, { useState } from "react";
import { useGetPeople } from "@/features/movie/api/people";
import { useParams } from "react-router-dom";
import LazyImage from "@/components/ui/LazyImage";
import { useImages } from "@/store/image-sizes";
import Spinner from "@/components/ui/Spinner";

export const PersonDetails: React.FC = () => {
	const { personId } = useParams();
	const [length, setLength] = useState(500);
	const person = useGetPeople(`person/${personId}`);
	const images = useImages((state) => state.url);

	if (person?.isLoading) {
		return <Spinner />;
	}

	return (
		<div className="grid grid-cols-1 gap-5 tablet:grid-cols-2">
			<div>
				<LazyImage
					src={`${images?.poster_w780}${person?.data?.profile_path}`}
					alt={person?.data?.name}
					className="rounded-xl"
				/>
			</div>

			<div className="space-y-4">
				<p className="font-bold text-4xl">{person?.data?.name}</p>
				<div className="text-sm">
					{person?.data?.biography &&
					person?.data?.biography?.length > length ? (
						<div>
							<span>{person?.data?.biography?.slice(0, length)}</span>
							<button onClick={() => setLength(-1)}>...</button>
						</div>
					) : (
						person?.data?.biography
					)}
				</div>
				<p>Profession: {person?.data?.known_for_department}</p>
				<div>
					{person?.data?.also_known_as?.map((k) => (
						<div key={k}>
							<p>{k}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
