import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";

interface IRouteHandlerProps {
  routes: Array<IRoute>;
  container?: React.ReactNode;
}

const RouteHandler: React.FC<IRouteHandlerProps> = ({ routes, container }) => {
  const { pathname } = useLocation();

  // append a 404 route to handle undefined routes
  routes = [
    ...routes,
    {
      component: <div>404</div>,
      path: "*",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={container}>
        {routes.map((route) => {
          if (route.roles) {
            // TODO check current user's roles/permissions
            if (route.roles.length) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Navigate to="/" replace state={{ from: pathname }} />
                  }
                />
              );
            }
          }

          if (route.isIndex) {
            return (
              <Route
                index
                element={route.component || <Outlet />}
                key={route.path}
              />
            );
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
