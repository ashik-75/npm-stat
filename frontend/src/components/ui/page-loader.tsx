import { Progress } from "@nextui-org/react";
import React from "react";

const PageLoader: React.FC = () => {
  return (
    <div>
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
