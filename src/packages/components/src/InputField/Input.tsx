import classNames from 'classnames';
import React, { ChangeEventHandler } from 'react';
import { ErrorMessage } from '@hookform/error-message';

export interface IInputProps {
  name: string;
  wrapperClassname?: string;
  className?: string;
  placeholder?: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: any;
  hidden?: boolean;
  error: any;
  ref?: React.LegacyRef<HTMLInputElement>;
}

const Input: React.FC<IInputProps> = props => {
  const wrapperClassname = classNames(
    'field-wrapper',
    props.wrapperClassname,
  );
  const inputClassname = classNames(
    'text',
    props.className,
  );
  return (
    <div className={wrapperClassname}>
      {props.label && <label>{props.label}</label>}
      <input
        className={inputClassname}
        placeholder={props.placeholder}
        onChange={props.onChange}
        hidden={props.hidden}
        value={props.value}
        name={props.name}
      />
      <ErrorMessage
        errors={props.error}
        name={props.name}
        render={({ message }) => {
          return <span>{message}</span>;
        }}
      />
    </div>
  );
};

export default Input;
