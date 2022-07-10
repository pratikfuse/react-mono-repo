interface IMainProps {
  children: React.ReactNode;
}

const Main: React.FC<IMainProps> = (props) => {
  return <div className="container">{props.children}</div>;
};

export default Main;
