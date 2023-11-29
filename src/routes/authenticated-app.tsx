import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Sidebar from "@/components/layout/sidebar";
import NotFound from "@/features/misc/routes/not-found";
import Account from "@/features/auth/routes/account";
import { useGetImagesPath } from "@/utils/hooks";
import PageLoader from "@/components/PageLoader";

interface ErrorFallbackProps {
  error: Error;
}

const People = lazy(() => import("@/features/movie/routes/people"));
const Movie = lazy(() => import("@/features/movie/routes/movies/movie"));
const Discover = lazy(() => import("@/features/movie/routes/discover"));
const FavouriteList = lazy(() => import("@/features/movie/routes/favourite"));
const SearchMovie = lazy(() => import("@/features/movie/routes/search-movie"));
const WatchList = lazy(() => import("@/features/movie/routes/watchlist"));
const Movies = lazy(() => import("@/features/movie/routes/movies"));
const TvShows = lazy(() => import("@/features/movie/routes/tv-shows"));
const TvShowsDetails = lazy(
  () => import("@/features/movie/routes/tv-shows/tv-shows-details"),
);
const PersonDetails = lazy(
  () => import("@/features/movie/routes/people/person-details"),
);

const ErrorFallBack: React.FC<ErrorFallbackProps> = ({ error }) => {
  return <ErrorMessage message={error.message} />;
};

const AuthenticatedApp: React.FC = () => {
  useGetImagesPath();

  return (
    <>
      <div className="monitor:gap-10 monitor:grid-cols-[250px_minmax(0,1fr)] tablet:grid tablet:grid-cols-[220px_minmax(0,1fr)] tablet:gap-5">
        <Sidebar />

        <main className="p-3 tablet:px-0 tablet:py-6">
          <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <React.Suspense fallback={<PageLoader />}>
              <AuthenticatedRoutes />
            </React.Suspense>
          </ErrorBoundary>
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
