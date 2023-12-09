import React from "react";
import { docsConfig } from "./data/nav-data";
import Menu from "./component/menu";
import { ScrollArea } from "../ui/scroll-area";

const Sidebar: React.FC = () => {
  return (
    <nav id="sidebar" className="">
      <div className="lg:w-[300px] lg:block fixed  top-0 hidden h-screen w-[200px] shrink-0 bg-neutral-50  text-slate-600">
        <div className="flex h-full flex-col justify-between">
          <div className="">
            <div className="ml-3 flex items-center gap-1 p-5">
              <span className="font-cl font-semibold text-black">Mercury</span>
              <span className="font-semibold text-rose-600">App</span>
            </div>
            <ScrollArea className="h-[700px]">
              <div className="space-y-2 px-5">
                {docsConfig.sideNav.map((item) => (
                  <Menu key={item.url} item={item} />
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="mt-auto space-y-2 p-5">
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
