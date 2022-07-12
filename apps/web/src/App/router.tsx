import AppContainer from "./AppContainer";
import RouteHandler from "src/components/RouteHandler";
import StudyManagementRouter from "./features/StudyManagement";

export enum APP_ROUTES {
  STUDY_MANAGEMENT = "study-management/*",
}

const routes: Array<IRoute> = [
  {
    path: APP_ROUTES.STUDY_MANAGEMENT,
    component: StudyManagementRouter,
  },
];

const AppRouter = () => (
  <RouteHandler routes={routes} container={<AppContainer />} />
);

export default AppRouter;
