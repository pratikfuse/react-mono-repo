import withAsync from "src/helpers/withAsync";
import StudyManagementContainer from "../Container";

enum ROUTE {
  STUDY_BUILDER = "study-builder",
  SPONSOR_MANAGEMENT = "sponsor-management",
}

const routes: Array<IRoute> = [
  {
    path: ROUTE.STUDY_BUILDER,
    component: withAsync(
      () => import("src/App/features/StudyManagement/pages/StudyBuilder")
    ),
    roles: ["admin"],
    container: <StudyManagementContainer />,
  },
  {
    path: ROUTE.SPONSOR_MANAGEMENT,
    component: withAsync(
      () => import("src/App/features/StudyManagement/pages/SponsorManagement")
    ),
    container: <StudyManagementContainer />,
  },
];

export default routes;
