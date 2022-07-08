import { Routes, Route, Outlet } from "react-router-dom";

interface IRouteHandlerProps {
  routes: Array<IRoute>;
  container?: React.ReactNode;
}

const RouteHandler: React.FC<IRouteHandlerProps> = ({ routes, container }) => {
  return (
    <Routes>
      <Route element={container}>
        {routes.map((route) => {
          if (route.isIndex) {
            return (
              <Route
                index
                element={route.component || <Outlet />}
                key={route.path}
              />
            );
          }

          if (route.roles) {
            return <div>Route needs {route.roles.join("|")}</div>;
          }

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

export default RouteHandler;
