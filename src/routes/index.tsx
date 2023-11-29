import Navbar from "@/components/layout/navbar";
import ScrollToTop from "@/components/scrool-to-top";
import { useUser } from "@/store/user";
import React from "react";
import AuthenticatedApp from "./authenticated-app";
import UnAuthenticatedApp from "./unauthenticated-app";

const AppRoutes: React.FC = () => {
	const { user } = useUser();
	return (
		<div className="max-w-7xl min-h-screen mx-auto flex flex-col">
			<Navbar />
			<main className="flex-1">
				<ScrollToTop />
				{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
			</main>
		</div>
	);
};

export default AppRoutes;
