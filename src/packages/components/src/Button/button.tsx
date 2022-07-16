import classnames from 'classnames';
import sizes from '../utils/sizes';
import React, { ButtonHTMLAttributes, FC } from 'react';

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  // button click handler function
  onClick?: (...args: any[]) => void;
  // css classname for button component
  className?: string;
  // button label to render
  children?: React.ReactNode;
  // pill
  pill?: boolean;
  // button size
  size?: keyof typeof sizes;
}

export const Button: FC<IButtonProps> = props => {
  const {
    className,
    children,
    pill,
    size,
    ...buttonProps
  } = props;
  const classNames = classnames(
    'btn',
    { [`btn-${size}`]: props.size },
    { 'btn-pill': pill },
    className,
  );

  return (
    <button className={classNames} {...buttonProps}>
      {children}
    </button>
  );
};
