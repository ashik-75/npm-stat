import React from "react";
import { useLocation } from "react-router-dom";

const NotFound: React.FC = () => {
	const location = useLocation();
	return (
		<div className="flex flex-col items-center text-white gap-3 p-5 bg-rose-600 rounded-xl">
			<div className="font-extrabold text-5xl">404</div>
			<h1 className="text-xl">Page Not Found</h1>
			<p>Recheck this URL: {location.pathname}</p>
		</div>
	);
};

export default NotFound;
