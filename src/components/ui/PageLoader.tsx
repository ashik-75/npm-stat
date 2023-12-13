import React from "react";
import { Progress } from "@nextui-org/react";

const PageLoader: React.FC = () => {
  return (
    <div className="relative flex h-[calc(100vh-96px)] w-full items-center justify-center">
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
      />
    </div>
  );
};

export default PageLoader;
