import classNames from "classnames";
import React, { ChangeEventHandler } from "react";

interface IInputFieldProps {
  wrapperClassname?: string;
  className?: string;
  placeholder?: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  hidden?: boolean;
}

const InputField: React.FC<IInputFieldProps> = (props) => {
  const wrapperClassname = classNames("field-wrapper", props.wrapperClassname);
  const inputClassname = classNames("text", props.className);

  return (
    <div className={wrapperClassname}>
      {props.label && <label>{props.label}</label>}
      <input
        className={inputClassname}
        placeholder={props.placeholder}
        onChange={props.onChange}
        hidden={props.hidden}
      />
    </div>
  );
};

export default InputField;
