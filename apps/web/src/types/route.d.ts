interface IRoute {
  path?: string;
  isIndex?: boolean;
  roles?: string[];
  component?: React.ReactElement;
  container?: React.ReactNode;
}

// AppRoutes = { ...ROUTES };
