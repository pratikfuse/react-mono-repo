import React from 'react';
import {
  toast as toastify,
  ToastOptions,
  TypeOptions,
} from 'react-toastify';
import UndoComponent from './UndoComponent';
import 'react-toastify/dist/ReactToastify.css';

export { ToastContainer } from 'react-toastify';

interface INotify {
  onUndo?: () => void;
  position?: keyof typeof toastify.POSITION;
  autoClose?: boolean;
  promise?: Promise<any> | (() => Promise<any>);
}

const defaultOptions: Partial<ToastOptions> = {
  className: '',
  autoClose: 1500,
  closeButton: true,
  position: 'top-right',
  closeOnClick: false,
};
const toast = (
  content: string,
  type: TypeOptions,
  options: INotify,
) => {
  if (options.onUndo) {
    toastify(
      <UndoComponent
        content={content}
        onUndo={options.onUndo}
      />,
      {
        ...defaultOptions,
        type,
      },
    );
    return;
  }
  toastify(content, {
    ...defaultOptions,
    type,
  });
};

export const showSuccess = (
  content: string,
  options?: INotify,
) => {
  toast(content, 'success', options || {});
};

export const showError = (
  content: string,
  options?: INotify,
) => {
  toast(content, 'error', options || {});
};

export const showInfo = (
  content: string,
  options?: INotify,
) => {
  toast(content, 'info', options || {});
};

export const showWarning = (
  content: string,
  options?: INotify,
) => {
  toast(content, 'warning', options || {});
};
