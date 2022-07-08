import React from "react";
import RouteHandler from "../../../../components/RouteHandler";
import { Container } from "./Container";
import SponsorManagement from "./pages/SponsorManagement";
import StudyBuilder from "./pages/StudyBuilder";

enum ROUTE {
  STUDY_BUILDER = "study-builder",
  SPONSOR_MANAGEMENT = "sponsor-management",
}

const routes: Array<IRoute> = [
  {
    path: ROUTE.STUDY_BUILDER,
    component: <StudyBuilder />,
    isIndex: true,
    roles: [],
  },
  {
    path: ROUTE.SPONSOR_MANAGEMENT,
    component: <SponsorManagement />,
  },
];

const StudyManagementRouter: React.FC = () => {
  return <RouteHandler routes={routes} container={<Container />} />;
};

export default StudyManagementRouter;
