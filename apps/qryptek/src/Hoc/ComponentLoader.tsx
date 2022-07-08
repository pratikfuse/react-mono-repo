import React from "react";
import Loadable, { LoadingComponentProps } from "react-loadable";

interface ILoaderComponentProps extends LoadingComponentProps {}

const LoaderComponent: React.FC<ILoaderComponentProps> = (props) => {
  if (props.isLoading) {
    <div>loading</div>;
  }
  if (props.error || props.pastDelay || props.timedOut) {
    return <div>Error</div>;
  }
  return <div>Lading</div>;
};

const LOADER_COMPONENT_TIMEOUT = 3000;
const LOADER_COMPONENT_DELAY = 800;

interface ICreateComponentLoaderParams {
  loader: () => Promise<
    React.ComponentType<any> | { default: React.ComponentType<any> }
  >;
}

const ComponentLoader = ({ loader }: ICreateComponentLoaderParams) => {
  return Loadable({
    loader,
    loading: LoaderComponent,
    delay: LOADER_COMPONENT_DELAY,
    timeout: LOADER_COMPONENT_TIMEOUT,
    render: (loaded: any) => {
      const Component = loaded.default;
      return <Component />;
    },
  });
};

export default ComponentLoader;
