import React from "react";
import { cn } from "@/utils/merge";
import { Loader } from "lucide-react";

const PageLoader: React.FC = () => {
  return (
    <div className="relative flex h-[calc(100vh-96px)] w-full items-center justify-center bg-slate-50 backdrop-blur-xl">
      <div className="inline-block">
        <Loader className={cn(`h-[50px] w-[50px] animate-spin`)} />
      </div>
    </div>
  );
};

export default PageLoader;
