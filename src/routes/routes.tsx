import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "@/components/ui/ErrorMessage";
import NotFound from "@/features/misc/routes/not-found";
import { useGetImagesPath } from "@/utils/hooks";
import PageLoader from "@/components/ui/PageLoader";

interface ErrorFallbackProps {
  error: Error;
}

const Home = lazy(() => import("@/features/trends/routes/home"));
const Details = lazy(() => import("@/features/trends/routes/details"));

const ErrorFallBack: React.FC<ErrorFallbackProps> = ({ error }) => {
  return <ErrorMessage message={error.message} />;
};

const RoutesContainer: React.FC = () => {
  useGetImagesPath();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <React.Suspense fallback={<PageLoader />}>
        <main className="p-5">
          <RoutesPath />
        </main>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default RoutesContainer;

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/:packages/*" element={<Details />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
