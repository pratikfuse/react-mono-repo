import {
  Link,
  Outlet,
} from 'react-router-dom';

function AppContainer() {
  return (
    <div className="app-container">
      <Link to="study-management">
        Study
        Management
      </Link>

      <Outlet />
    </div>
  );
}

export default AppContainer;
