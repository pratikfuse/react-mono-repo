import classNames from "classnames";
import React from "react";
import sides from "../utils/sides";

interface IToolTipProps {
  containerClassName?: string;
  textClassName?: string;
  children?: React.ReactNode;
  text?: string;
  position?: keyof typeof sides;
}

const Tooltip: React.FC<IToolTipProps> = (props) => {
  const containerClassname = classNames("tooltip", props.containerClassName);
  const textClassName = classNames(
    "tooltiptext",
    { [`tooltip-${props.position}`]: props.position },
    props.textClassName
  );
  return (
    <div className={containerClassname}>
      {props.children}
      <span className={textClassName}>{props.text}</span>
    </div>
  );
};

export default Tooltip;
