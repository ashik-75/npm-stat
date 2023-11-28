import FullPageErrorFallback from "@/components/FullPageErrorFallback";
import FullPageLoader from "@/components/FullPageLoader";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ScrollToTop from "@/components/scrool-to-top";
import { useUser } from "@/store/user";
import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

const AuthenticatedApp = lazy(() => import("./authenticated-app"));
const UnAuthenticatedApp = lazy(() => import("./unauthenticated-app"));

const AppRoutes: React.FC = () => {
	const { user } = useUser();
	return (
		<Suspense fallback={<FullPageLoader />}>
			<ErrorBoundary FallbackComponent={FullPageErrorFallback}>
				<div className="max-w-7xl min-h-screen mx-auto flex flex-col">
					<Navbar />
					<main className="flex-1">
						<ScrollToTop />
						{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
					</main>
				</div>
			</ErrorBoundary>
		</Suspense>
	);
};

export default AppRoutes;
