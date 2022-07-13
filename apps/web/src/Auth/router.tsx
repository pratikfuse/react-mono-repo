import RouteHandler from 'src/Common/components/RouteHandler';
import AuthContainer from './Container';
import LoginPage from './pages/Login';
import Register from './pages/Register';

enum ROUTES {
  LOGIN = 'login',
  REGISTER = 'register',
}

const routes: Array<IRoute> = [
  {
    path: ROUTES.LOGIN,
    component: <LoginPage />,
  },
  {
    path: ROUTES.REGISTER,
    component: <Register />,
  },
];

const AuthRouter = () => (
  <RouteHandler
    routes={routes}
    container={<AuthContainer />}
  />
);

export default AuthRouter;
