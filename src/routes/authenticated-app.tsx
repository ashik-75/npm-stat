import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Sidebar from "@/components/layout/sidebar";
import NotFound from "@/features/misc/routes/not-found";
import Account from "@/features/auth/routes/account";
import { lazyImport } from "@/utils/lazy-import";
import { useGetImagesPath } from "@/utils/hooks";
import Footer from "@/components/layout/footer";

interface ErrorFallbackProps {
	error: Error;
}

const { Movie } = lazyImport(() => import("@/features/movie"), "Movie");
const { Discover } = lazyImport(() => import("@/features/movie"), "Discover");
const { FavouriteList } = lazyImport(
	() => import("@/features/movie"),
	"FavouriteList"
);
const { SearchMovie } = lazyImport(
	() => import("@/features/movie"),
	"SearchMovie"
);
const { WatchList } = lazyImport(() => import("@/features/movie"), "WatchList");
const { Movies } = lazyImport(() => import("@/features/movie"), "Movies");
const { TvShows } = lazyImport(() => import("@/features/movie"), "TvShows");
const { TvShowsDetails } = lazyImport(
	() => import("@/features/movie"),
	"TvShowsDetails"
);
const { People } = lazyImport(() => import("@/features/movie"), "People");
const { PersonDetails } = lazyImport(
	() => import("@/features/movie"),
	"PersonDetails"
);

const ErrorFallBack: React.FC<ErrorFallbackProps> = ({ error }) => {
	return <ErrorMessage message={error.message} />;
};

const AuthenticatedApp: React.FC = () => {
	useGetImagesPath();

	return (
		<>
			<div className="tablet:grid tablet:gap-5 monitor:gap-10 tablet:grid-cols-[220px_minmax(0,1fr)] monitor:grid-cols-[250px_minmax(0,1fr)]">
				<Sidebar />

				<main className="p-3 tablet:py-6 tablet:px-0">
					<React.Suspense fallback={<div>Loading for compo .....</div>}>
						<ErrorBoundary FallbackComponent={ErrorFallBack}>
							<AuthenticatedRoutes />
						</ErrorBoundary>
					</React.Suspense>
				</main>
			</div>
		</>
	);
};

export default AuthenticatedApp;

const AuthenticatedRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Discover />} />
			<Route path="/favourite-list" element={<FavouriteList />} />
			<Route path="/account" element={<Account />} />
			<Route path="/search" element={<SearchMovie />} />
			<Route path="/movie/:movieId" element={<Movie />} />
			<Route path="/movies" element={<Movies />} />
			<Route path="/movies/:category" element={<Movies />} />
			<Route path="/tv-shows" element={<TvShows />} />
			<Route path="/tv-shows/:showType" element={<TvShows />} />
			<Route path="/tv-show/:showId" element={<TvShowsDetails />} />
			<Route path="/watch-list" element={<WatchList />} />
			<Route path="/people" element={<People />} />
			<Route path="/people/:personId" element={<PersonDetails />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
