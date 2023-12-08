import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "@/components/ui/ErrorMessage";
import NotFound from "@/features/misc/routes/not-found";
import Account from "@/features/auth/routes/account";
import { useGetImagesPath } from "@/utils/hooks";
import PageLoader from "@/components/ui/PageLoader";

interface ErrorFallbackProps {
  error: Error;
}

const Dashboard = lazy(() => import("@/features/dashboard/routes/dashboard"));

const ErrorFallBack: React.FC<ErrorFallbackProps> = ({ error }) => {
  return <ErrorMessage message={error.message} />;
};

const AuthenticatedApp: React.FC = () => {
  useGetImagesPath();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <React.Suspense fallback={<PageLoader />}>
        <main className="p-5">
          <AuthenticatedRoutes />
        </main>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default AuthenticatedApp;

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
