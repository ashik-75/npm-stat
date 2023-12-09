import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="lg:grid-cols-[300px_minmax(0,1fr)] font-karla  grid">
      <Sidebar />

      <div>
        <Topbar />
        <div className="font-inter mx-auto max-w-7xl shrink-0 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
