import React from "react";
import FullPageSpinner from "./component/fullpage-spinner";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      <div className="mx-auto max-w-7xl bg-white font-inter">{children}</div>
    </React.Suspense>
  );
};

export default Layout;
