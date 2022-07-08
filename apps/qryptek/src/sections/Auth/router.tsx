import RouteHandler from "../../components/RouteHandler";
import AuthContainer from "./Container";

enum ROUTES {
  LOGIN = "login",
  REGISTER = "register",
}

const routes: Array<IRoute> = [
  {
    path: ROUTES.LOGIN,
    component: <div>Login</div>,
  },
  {
    path: ROUTES.REGISTER,
    component: <div className="">Register</div>,
  },
];

const AuthRouter = () => (
  <RouteHandler routes={routes} container={<AuthContainer />} />
);

export default AuthRouter;
