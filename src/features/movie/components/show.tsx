import React from "react";

import { Link } from "react-router-dom";
import LazyImage from "@/components/ui/LazyImage";
import Rating from "./rating";
import { cn } from "@/utils/merge";
import { useImages } from "@/store/image-sizes";
import { ListItemProps } from "@/components/list/card-list";
import { Show as ShowType } from "@/features/movie/types";

const Show: React.FC<ListItemProps<ShowType>> = ({
	resource,
	className = "",
}) => {
	const { url } = useImages();
	const { id, poster_path, name, vote_average } = resource;
	return (
		<div
			key={id}
			className={cn(
				"border p-2 rounded-lg hover:shadow transition-all duration-300",
				className
			)}
		>
			<Link to={`/tv-shows/${id}`}>
				<LazyImage
					src={
						poster_path ? `${url.poster_w342}${poster_path}` : "/no-image.png"
					}
					className="rounded-lg"
					aspect="aspect-[1/1.5]"
				/>
			</Link>
			<p className="font-semibold">
				{name.length > 20 ? `${name.slice(0, 20)} ...` : name}
			</p>
			<Rating value={vote_average} />
		</div>
	);
};

export default Show;
