import React from 'react';
import {
  Controller,
  useFormContext,
} from 'react-hook-form';
import Input, { IInputProps } from './Input';

interface IInputFormFieldProps
  extends Omit<IInputProps, 'error'> {
  required?: boolean;
}

const InputField: React.FC<IInputFormFieldProps> =
  props => {
    const { name, required, ...inputProps } = props;

    const {
      control,
      formState: { errors },
    } = useFormContext();

    return (
      <Controller
        name={name}
        rules={{
          required: true,
        }}
        control={control}
        render={({
          field: { ref, value, onChange, ...field },
        }) => {
          return (
            <Input
              label={inputProps.label}
              value={value}
              onChange={onChange}
              error={errors}
              {...field}
            />
          );
        }}
      />
    );
  };

export default InputField;
