import classNames from "classnames";
import React from "react";

interface IInputFieldProps {
  wrapperClassname?: string;
  className?: string;
  placeholder?: string;
  label: string;
}

const InputField: React.FC<IInputFieldProps> = (props) => {
  const wrapperClassname = classNames("field-wrapper", props.wrapperClassname);
  const inputClassname = classNames("text", props.className);

  return (
    <div className={wrapperClassname}>
      {props.label && <label>{props.label}</label>}
      <input className={inputClassname} placeholder={props.placeholder} />
    </div>
  );
};

export default InputField;
