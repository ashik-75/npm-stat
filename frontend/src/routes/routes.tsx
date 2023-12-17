import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "@/components/ui/ErrorMessage";
import PageLoader from "@/components/ui/page-loader";

interface ErrorFallbackProps {
  error: Error;
}

const Home = lazy(() => import("@/features/trends/routes/home"));
const Details = lazy(() => import("@/features/trends/routes/details"));

const ErrorFallBack: React.FC<ErrorFallbackProps> = ({ error }) => {
  return <ErrorMessage message={error.message} />;
};

const RoutesContainer: React.FC = () => {
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
    </Routes>
  );
};
