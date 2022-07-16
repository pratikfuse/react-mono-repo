import { get } from 'lodash';
import React from 'react';
import {
  FormProvider,
  useForm,
  SubmitHandler,
  Mode,
  UseFormReturn,
  FieldValues,
  DeepPartial,
} from 'react-hook-form';

import * as yup from 'yup';
import { useYupValidationResolver } from '../../utils/form';

type ValidationSchema<Type> = {
  [key in keyof Type]: any;
};

export interface IFormWrapperProps<IInitialData> {
  ref?: React.RefObject<any>;
  initialData?: IInitialData;
  handleSubmit: SubmitHandler<any>;
  methods?: any;
  mode?: Mode;
  revalidateMode?: Exclude<Mode, 'onTouched' | 'all'>;
  validationSchema: yup.ObjectSchema<
    ValidationSchema<DeepPartial<IInitialData>>
  >;
  render: (
    props: UseFormReturn<IInitialData>,
  ) =>
    | React.ReactElement<{ name: keyof IInitialData }>
    | React.ReactElement<{ name: keyof IInitialData }>[];
}

function FormWrapper<IInitialData extends FieldValues>(
  props: IFormWrapperProps<IInitialData>,
) {
  const resolver = useYupValidationResolver(
    props.validationSchema,
  );
  const methods = useForm<IInitialData>({
    mode: props.mode || 'all',
    reValidateMode: props.revalidateMode || 'onChange',
    defaultValues:
      props.initialData as DeepPartial<IInitialData>,
    resolver,
  });

  async function submit(values: IInitialData) {
    try {
      const s = await props.handleSubmit(values);
      const errors = get(s, 'payload.errors');
      if (errors) {
        Object.keys(errors).forEach(
          (errorKey: any, index: number) => {
            if (index === 0) {
              const ref =
                document.getElementsByName(errorKey)[0];
              if (ref) {
                ref.scrollTo({ behavior: 'smooth' });
                ref.focus();
              }
            }
            methods.setError(errorKey, {
              message: errors[errorKey],
            });
          },
        );
      }
    } catch (error: any) {}
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        {props.render(methods)}
      </form>
    </FormProvider>
  );
}

export function withForm() {}
export default FormWrapper;
