import React from "react";
import LazyImage from "@/components/ui/LazyImage";
import { ListItemProps } from "@/components/list/card-list";
import { Link } from "react-router-dom";
import { Cast } from "@/features/movie/types";

export const CastActor: React.FC<ListItemProps<Cast>> = ({ resource }) => {
	const { id, original_name, character, profile_path } = resource;
	return (
		<div key={id} className="border p-2 rounded-lg w-[200px] shrink-0">
			<Link to={`/people/${id}`}>
				<LazyImage
					src={`https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`}
					className="rounded-lg"
					aspect="aspect-[1/1.5]"
				/>
			</Link>

			<p className="font-bold">
				{original_name.length > 10
					? `${original_name.slice(0, 17)} ...`
					: original_name}
			</p>
			<p>
				{character.length > 10 ? `${character.slice(0, 10)} ...` : character}
			</p>
		</div>
	);
};
