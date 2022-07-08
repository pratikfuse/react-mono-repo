import React from "react";
import { Link, Outlet } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <div className="container">
      <Link to="study-management-builder">study-management-builder</Link>

      <Outlet />
    </div>
  );
};
