import React from "react";
import { useLocation } from "react-router-dom";

const NotFound: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl bg-rose-600 text-white">
      <div className="text-5xl font-extrabold">404</div>
      <h1 className="text-xl">Page Not Found</h1>
      <p>Recheck this URL: {location.pathname}</p>
    </div>
  );
};

export default NotFound;
