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
const ProductList = lazy(
  () => import("@/features/products/routes/product-list"),
);
const ProductDetails = lazy(
  () => import("@/features/products/routes/product-details"),
);
const CreateProduct = lazy(
  () => import("@/features/products/routes/create-product"),
);
const InvoiceList = lazy(() => import("@/features/invoice/routes/list"));
const UserList = lazy(() => import("@/features/user/routes/user-list"));
const OrderList = lazy(() => import("@/features/order/routes/order-list"));

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
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:productSlug" element={<ProductDetails />} />
      <Route path="/product/create" element={<CreateProduct />} />

      <Route path="/invoice/list" element={<InvoiceList />} />
      <Route path="/order/list" element={<OrderList />} />

      <Route path="/user/list" element={<UserList />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
