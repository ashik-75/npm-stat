import React, { lazy } from "react";

const Routes = lazy(() => import("./routes"));

const AppRoutes: React.FC = () => {
  return <Routes />;
};

export default AppRoutes;
