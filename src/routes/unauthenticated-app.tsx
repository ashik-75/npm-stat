import Login from "@/features/auth/routes/login";
import Register from "@/features/auth/routes/register";
import BlogList from "@/features/blog/routes/blog-list";
import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

const UnAuthenticatedApp: React.FC = () => {
  return (
    <div className="p-5">
      <UnAuthenticatedRoutes />
    </div>
  );
};

export default UnAuthenticatedApp;

const UnAuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
