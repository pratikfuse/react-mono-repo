import { Outlet } from "react-router-dom";

function AppContainer() {
  return (
    <div className="app-container">
      <Outlet />
    </div>
  );
}

export default AppContainer;
