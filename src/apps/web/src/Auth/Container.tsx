import { Link, Outlet } from 'react-router-dom';

const AuthContainer: React.FC = () => {
  return (
    <div className="auth-container">
      <Link to="/auth/login" className="mr-5">
        Login
      </Link>
      <Link to="/auth/register">Register</Link>

      <Outlet />
    </div>
  );
};

export default AuthContainer;
