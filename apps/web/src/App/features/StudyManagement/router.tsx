import React from "react";
import RouteHandler from "src/components/RouteHandler";
import withAsync from "src/helpers/withAsync";
import StudyManagementContainer from "./Container";

export enum STUDY_MANAGEMENT_ROUTES {
  STUDY_BUILDER = "study-builder",
  SPONSOR_MANAGEMENT = "sponsor-management",
}

const routes: Array<IRoute> = [
  {
    path: STUDY_MANAGEMENT_ROUTES.STUDY_BUILDER,
    component: withAsync(() => import("./pages/StudyBuilder")),
    roles: ["admin"],
    container: <StudyManagementContainer />,
  },
  {
    path: STUDY_MANAGEMENT_ROUTES.SPONSOR_MANAGEMENT,
    component: withAsync(() => import("./pages/SponsorManagement")),
    container: <StudyManagementContainer />,
  },
];

const StudyManagementRouter: React.FC = () => {
  return (
    <RouteHandler routes={routes} container={<StudyManagementContainer />} />
  );
};

export default StudyManagementRouter;
