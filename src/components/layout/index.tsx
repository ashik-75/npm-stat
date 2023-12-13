import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import FullPageSpinner from "./component/fullpage-spinner";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      <div className="grid font-inter lg:grid-cols-[300px_minmax(0,1fr)]">
        <Sidebar />

        <div>
          <Topbar />
          <div className="mx-auto max-w-7xl shrink-0 overflow-hidden bg-white font-inter">
            {children}
          </div>
        </div>
      </div>
    </React.Suspense>
  );
};

export default Layout;
