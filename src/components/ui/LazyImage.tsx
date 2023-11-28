import { cn } from "@/utils/merge";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyImageProps {
	src?: string;
	alt?: string;
	className?: string;
	height?: string | number;
	width?: string | number;
	aspect?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
	src,
	alt,
	className,
	height,
	width,
	aspect,
}) => {
	return (
		<div className={cn("relative", aspect)}>
			<LazyLoadImage
				src={src}
				className={cn(className, "w-full h-full object-cover")}
				alt={alt}
				effect="blur"
				height={height ?? "100%"}
				width={width ?? "100%"}
			/>
		</div>
	);
};

export default LazyImage;
