import React from "react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/ui/LazyImage";
import { cn } from "@/utils/merge";
import { useImages } from "@/store/image-sizes";
import { ListItemProps } from "@/components/list/card-list";
import { People } from "@/features/movie/types";

const PeopleComponent: React.FC<ListItemProps<People>> = ({
	resource,
	className,
}) => {
	const { url } = useImages();
	const { id, profile_path, name } = resource;

	return (
		<div
			key={id}
			className={cn(
				"border p-2 rounded-lg hover:shadow transition-all duration-300",
				className
			)}
		>
			<Link to={`/people/${id}`}>
				<LazyImage
					src={profile_path ? `${url.profile}${profile_path}` : "/no-image.png"}
					className="rounded-lg"
					aspect="aspect-[1/1.5]"
				/>
			</Link>
			<p className="font-semibold">
				{name.length > 20 ? `${name.slice(0, 20)} ...` : name}
			</p>
		</div>
	);
};

export default PeopleComponent;
