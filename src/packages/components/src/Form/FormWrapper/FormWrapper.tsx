import React, { useImperativeHandle } from "react";
import { FormProvider, useForm, SubmitHandler, Mode } from "react-hook-form";

export interface IFormWrapperProps {
  ref: React.RefObject<any>;
  handleSubmit: SubmitHandler<any>;
  methods: any;
  mode?: Mode;
  revalidateMode?: Exclude<Mode, "onTouched" | "all">;
  children: React.ReactNode;
}

const FormWrapper: React.FC = React.forwardRef<any, IFormWrapperProps>(
  (props, ref) => {
    const methods = useForm({
      mode: props.mode || "all",
      reValidateMode: props.revalidateMode || "onBlur",
    });

    useImperativeHandle(ref, () => console.log);
    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(props.handleSubmit)}>
          {props.children}
        </form>
      </FormProvider>
    );
  }
);

FormWrapper.displayName = "FormWrapper";

export function withForm() {}
export default FormWrapper;
