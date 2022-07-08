import React from "react";

interface IPageLoader {
  completed: number;
}

export const PageLoader: React.FC<IPageLoader> = (props) => {
  return (
    <div
      className="page-loader"
      style={{
        width: `${props.completed}%`,
      }}
    ></div>
  );
};
