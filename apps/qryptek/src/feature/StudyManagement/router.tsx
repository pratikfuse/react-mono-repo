import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "./Container";
import SponsorManagement from "./pages/SponsorManagement";
import StudyBuilder from "./pages/StudyBuilder";

const route = {
  STUDY_BUILDER: "study-builder",
  SPONSOR_MANAGEMENT: "sponsor-management",
};

const routes: Array<IRoute> = [
  {
    path: route.STUDY_BUILDER,
    component: <StudyBuilder />,
    isIndex: true,
    roles: [],
  },
  {
    path: route.SPONSOR_MANAGEMENT,
    component: <SponsorManagement />,
  },
];

const StudyManagementRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Container />}>
        {routes.map((route) => {
          console.log(route);
          if (route.isIndex)
            return <Route index element={route.component} key={route.path} />;

          return (
            <Route
              element={route.component}
              path={route.path}
              key={route.path}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default StudyManagementRouter;
