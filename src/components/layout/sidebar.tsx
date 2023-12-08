import React from "react";
import { docsConfig } from "./data/nav-data";
import Menu from "./component/menu";

const Sidebar: React.FC = () => {
  return (
    <nav id="sidebar" className="">
      <div className="lg:w-[300px] lg:block fixed  top-0 hidden h-screen w-[200px] shrink-0 bg-neutral-50 p-5 text-slate-600">
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-10">
            <div className="ml-3 flex items-center gap-1">
              <span className="font-cl font-semibold text-black">Mercury</span>
              <span className="font-semibold text-rose-600">App</span>
            </div>

            <div className="space-y-2">
              {docsConfig.sideNav.map((item) => (
                <Menu key={item.url} item={item} />
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-2">
            {docsConfig.footerNav.map((item) => (
              <Menu key={item.url} item={item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
