import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function AppContainer() {
  // fetch user profile from server and add to redux store
  useEffect(() => {}, []);
  return (
    <div className="app-container">
      <Link to="study-management">Study Management</Link>

      <Outlet />
    </div>
  );
}

export default AppContainer;
