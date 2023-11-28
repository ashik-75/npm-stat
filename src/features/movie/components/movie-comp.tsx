import React from "react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/ui/LazyImage";
import Rating from "./rating";
import { cn } from "@/utils/merge";
import { useImages } from "@/store/image-sizes";
import { ListItemProps } from "@/components/list/card-list";
import { Movie } from "@/features/movie/types";

const MovieComponent: React.FC<ListItemProps<Movie>> = ({
	resource,
	className,
}) => {
	const { url } = useImages();
	const { id, poster_path, original_title, vote_average } = resource;
	return (
		<div
			key={id}
			className={cn(
				"border p-2 rounded-lg hover:shadow transition-all duration-300",
				className
			)}
		>
			<Link to={`/movie/${id}`}>
				<LazyImage
					src={
						poster_path ? `${url.poster_w342}${poster_path}` : "/no-image.png"
					}
					className="rounded-lg"
					aspect="aspect-[1/1.5]"
				/>
			</Link>
			<p className="font-semibold">
				{original_title.length > 20
					? `${original_title.slice(0, 20)} ...`
					: original_title}
			</p>
			<Rating value={vote_average} />
		</div>
	);
};

export default MovieComponent;
