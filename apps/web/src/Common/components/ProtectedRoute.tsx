import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedInSelector } from "src/Auth/redux/selectors";
import { useAppSelector } from "src/Common/redux/hooks";

interface IProtectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = (props) => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }
  return <div>{props.children}</div>;
};

export default ProtectedRoute;
