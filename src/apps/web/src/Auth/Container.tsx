import { Link, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'src/Common/redux/hooks';

const AuthContainer: React.FC = () => {
  const isLoggedIn = useAppSelector(
    state => state.Auth.isLoggedIn,
  );

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
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
