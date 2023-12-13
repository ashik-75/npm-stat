import Icon from "@/components/ui/icon";
import React from "react";

const FullPageSpinner: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden">
      <Icon name="Loader" className="animate-spin" size={50} />
    </div>
  );
};

export default FullPageSpinner;
