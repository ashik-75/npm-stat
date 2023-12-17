import { Spinner } from "@nextui-org/react";
import React from "react";

const FullPageSpinner: React.FC = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log("SUSPENSE");
      setValue((v) => {
        if (v >= 100) {
          clearInterval(interval);
          return 100;
        }
        return v + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden p-5 font-inter">
      <div className="block w-full  text-center text-3xl font-bold">
        {value}%
      </div>
      <Spinner label="Loading..." color="warning" />
    </div>
  );
};

export default FullPageSpinner;
