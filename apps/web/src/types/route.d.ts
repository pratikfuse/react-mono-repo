interface IRoute {
  path?: string;
  isIndex?: boolean;
  roles?: string[];
  component?: React.ReactElement;
}
