import React from "react";
import { docsConfig } from "./data/nav-data";
import Menu from "./component/menu";
import { ScrollArea } from "../ui/scroll-area";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <nav id="sidebar" className="">
      <div className="fixed top-0 hidden  h-screen w-[200px] shrink-0 border-r border-slate-200 shadow-sm lg:block lg:w-[300px]">
        <div className="flex h-full flex-col justify-between">
          <div className="">
            <div className="ml-3 flex items-center gap-1 p-5">
              <Link to={"/"}>
                <span className="font-bold uppercase text-black">
                  X - Trail
                </span>
              </Link>
            </div>
            <ScrollArea className="h-[70dvh]">
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
