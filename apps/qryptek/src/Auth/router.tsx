import RouteHandler from "src/components/RouteHandler";
import AuthContainer from "./Container";

const routes: Array<IRoute> = [];

const AuthRouter = () => (
  <RouteHandler routes={routes} container={<AuthContainer />} />
);

export default AuthRouter;
