import { Link, Outlet } from "react-router-dom";

const StudyManagementContainer: React.FC = () => {
  return (
    <div className="study-manangement-container">
      <div>Header</div>
      <div>Sidebar</div>
      <Link to="study-builder">Studies</Link>
      <Link to="sponsor-management">Sponsors</Link>
      <Outlet />
    </div>
  );
};

export default StudyManagementContainer;
