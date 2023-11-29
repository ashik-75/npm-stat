import React from "react";
import Spinner from "./ui/Spinner";

interface PageLoaderProps {
	size?: number;
}

const PageLoader: React.FC<PageLoaderProps> = ({ size = 20 }) => {
	return (
		<div className="h-full w-full relative flex items-center justify-center">
			<Spinner size={size} />
		</div>
	);
};

export default PageLoader;
