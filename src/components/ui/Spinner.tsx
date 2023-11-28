import { cn } from "@/utils/merge";
import { Loader } from "lucide-react";
import React from "react";

interface SpinnerPros {
	size?: number;
	className?: string;
}

const Spinner: React.FC<SpinnerPros> = ({ size = 5, className }) => {
	return (
		<div>
			<Loader
				className={cn("animate-spin", `w-${size} h-${size}`, className)}
			/>
		</div>
	);
};

export default Spinner;
