import React from "react";
import { Routes, Route } from "react-router-dom";

interface IRouterProps {
  routes: Array<IRoute>;
}

export const Router: React.FC<IRouterProps> = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route) => (
        // pass a container component to top level route
        <Route path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default Router;
