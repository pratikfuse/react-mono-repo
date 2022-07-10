import { Link, Outlet } from "react-router-dom";

const AuthContainer: React.FC = () => {
  return (
    <div className="auth-container">
      <Outlet />
    </div>
  );
};

export default AuthContainer;
