import React from "react";
import { useLocation } from "react-router-dom";

const defaultMessage = "Nothing Found";

interface EmptyState {
	message?: string;
}

const EmptyState: React.FC<EmptyState> = ({ message = defaultMessage }) => {
	const location = useLocation();

	return (
		<div className="max-w-xl border p-5 rounded-xl space-y-5 bg-rose-600 text-white">
			<h1 className="font-bold text-5xl">404</h1>
			<h1>{message}</h1>
			<div>
				Please check this url :{" "}
				<span className=" inline-block">{location.pathname}</span>
			</div>
		</div>
	);
};

export default EmptyState;
