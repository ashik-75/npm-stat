import NotFound from "@/features/misc/routes/not-found";
import React from "react";
import { Route, Routes } from "react-router-dom";

const CommonApp: React.FC = () => {
  return (
    <div>
      <CommonRoutes />
    </div>
  );
};

export default CommonApp;

const CommonRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
