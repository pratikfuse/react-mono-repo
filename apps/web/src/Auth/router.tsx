import RouteHandler from 'src/Common/components/RouteHandler';
import withAsync from 'src/helpers/withAsync';
import AuthContainer from './Container';

enum ROUTES {
  LOGIN = 'login',
  REGISTER = 'register',
}

const routes: Array<IRoute> = [
  {
    path: ROUTES.LOGIN,
    component: withAsync(() => import('./pages/Login')),
  },
  {
    path: ROUTES.REGISTER,
    component: withAsync(() => import('./pages/Register')),
  },
];

const AuthRouter = () => (
  <RouteHandler
    routes={routes}
    container={<AuthContainer />}
  />
);

export default AuthRouter;
