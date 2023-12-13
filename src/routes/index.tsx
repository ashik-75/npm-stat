import React, { lazy } from "react";

const AuthenticatedApp = lazy(() => import("./authenticated-app"));

const AppRoutes: React.FC = () => {
  return <AuthenticatedApp />;
};

export default AppRoutes;
