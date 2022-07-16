import { useAppDispatch } from 'src/Common/redux/hooks';
import { InputField } from '@lf-mono-web/components';
import { login } from 'src/Auth/redux/reducer';
import FormWrapper from '@lf-mono-web/components/lib/Form/FormWrapper';
import React from 'react';
import * as yup from 'yup';
import Button from '@lf-mono-web/components/lib/Button';

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = async (values: any) => {
    return await dispatch(login(values));
  };

  const defaultValues = {
    email: '',
    password: '',
    user: {
      name: '',
    },
  };

  return (
    <div>
      <h4>Login </h4>

      <FormWrapper
        handleSubmit={handleLogin}
        mode="onBlur"
        validationSchema={yup.object({
          email: yup.string().email().required(),
          password: yup.string().required(),
          user: yup.object({
            name: yup
              .string()
              .max(3)
              .label('udsername')
              .required(),
          }),
        })}
        initialData={defaultValues}
        render={({ formState }) => (
          <React.Fragment>
            <InputField
              name="email"
              label="Email"
              placeholder="Your Email"
            />
            <InputField
              name="password"
              label="Password"
              required
              placeholder="Your password"
            />
            <InputField
              name="user.name"
              label="name"
              required
              placeholder="username"
            />

            <Button
              type="submit"
              disabled={
                (!formState.isValid &&
                  formState.isSubmitted) ||
                formState.isSubmitting
              }
            >
              Login
            </Button>
          </React.Fragment>
        )}
      />
    </div>
  );
};

export default LoginPage;
