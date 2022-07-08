import RouteHandler from "../../components/RouteHandler";
import AppContainer from "./AppContainer";

enum ROUTES {
  STUDY_MANAGEMENT = "study-management",
}

const routes: Array<IRoute> = [
  {
    path: ROUTES.STUDY_MANAGEMENT,
    component: <div>Study Management</div>,
  },
];

const AppRouter = () => (
  <RouteHandler routes={routes} container={<AppContainer />} />
);

export default AppRouter;
