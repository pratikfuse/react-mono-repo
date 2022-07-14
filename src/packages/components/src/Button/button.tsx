import classnames from "classnames";
import sizes from "../utils/sizes";
import React, { FC } from "react";

export interface IButtonProps {
  // button click handler function
  onClick: (...args: any[]) => void;
  // css classname for button component
  className?: string | string[];
  // button label to render
  children?: React.ReactNode;
  // pill
  pill?: boolean;
  // button size
  size?: keyof typeof sizes;
}

export const Button: FC<IButtonProps> = (props) => {
  const classNames = classnames(
    "btn",
    { [`btn-${props.size}`]: props.size },
    { "btn-pill": props.pill },
    props.className
  );
  return (
    <button onClick={props.onClick} className={classNames}>
      {props.children}
    </button>
  );
};
