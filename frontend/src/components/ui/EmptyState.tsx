import React from "react";

const defaultMessage = "Nothing Found";

interface EmptyState {
	message?: string;
}

const EmptyState: React.FC<EmptyState> = ({ message = defaultMessage }) => {
	return (
		<div className="max-w-xl border p-5 rounded-xl space-y-5 bg-rose-600 text-white">
			<h1 className="font-bold text-5xl">404</h1>
			<h1>{message}</h1>
		</div>
	);
};

export default EmptyState;
