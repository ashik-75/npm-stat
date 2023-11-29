import React from "react";
import Spinner from "./ui/Spinner";

interface PageLoaderProps {
  size?: number;
}

const PageLoader: React.FC<PageLoaderProps> = ({ size = 20 }) => {
  return (
    <div className="relative flex h-[calc(100vh-96px)] w-full items-center justify-center bg-rose-600">
      <Spinner size={size} />
    </div>
  );
};

export default PageLoader;
