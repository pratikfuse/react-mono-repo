import classnames from "classnames";
import sizes from "../utils/sizes";
import React, { FC } from "react";

export interface IButtonProps {
  onClick: (...args: any[]) => void;
  className?: string | string[];
  children?: React.ReactNode;
  pill?: boolean;
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
