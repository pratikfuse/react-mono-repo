import React, { useState } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = (props) => {
  const [loggedIn] = useState<boolean>(false);

  if (!loggedIn) {
    return <Navigate to="/auth/login" replace />;
  }
  return <div>{props.children}</div>;
};

export default ProtectedRoute;
