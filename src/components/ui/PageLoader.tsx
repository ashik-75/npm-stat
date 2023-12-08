import React from "react";
import Icon from "./icon";

const PageLoader: React.FC = () => {
  return (
    <div className="relative flex h-[calc(100vh-96px)] w-full items-center justify-center">
      <Icon name="Loader" className="animate-spin" size={40} />
    </div>
  );
};

export default PageLoader;
