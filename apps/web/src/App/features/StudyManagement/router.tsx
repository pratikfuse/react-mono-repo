import React from 'react';
import RouteHandler from 'src/Common/components/RouteHandler';
import StudyManagementContainer from './Container';
import StudyBuilder from './pages/StudyBuilder';
import SponsorManagement from './pages/SponsorManagement';

export enum STUDY_MANAGEMENT_ROUTES {
  STUDY_BUILDER = 'study-builder',
  SPONSOR_MANAGEMENT = 'sponsor-management',
}

const routes: Array<IRoute> = [
  {
    path: STUDY_MANAGEMENT_ROUTES.STUDY_BUILDER,
    component: <StudyBuilder />,
    roles: ['admin'],
  },
  {
    path: STUDY_MANAGEMENT_ROUTES.SPONSOR_MANAGEMENT,
    component: <SponsorManagement />,
  },
];

const StudyManagementRouter: React.FC = () => {
  return (
    <RouteHandler
      routes={routes}
      container={<StudyManagementContainer />}
    />
  );
};

export default StudyManagementRouter;
