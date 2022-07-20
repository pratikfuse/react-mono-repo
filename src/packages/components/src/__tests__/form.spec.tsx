import { fireEvent } from '@storybook/testing-library';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Button from '../Button';
import FormWrapper from '../Form/FormWrapper';
import InputField from '../InputField';
describe('Form UI', () => {
  afterEach(cleanup);

  it('should render a form with text fields and submit button', () => {
    const submitHandler = jest.fn();

    const {
      getByLabelText,
      getByText,
      getByPlaceholderText,
    } = render(
      <FormWrapper
        handleSubmit={submitHandler}
        initialData={{ email: '', password: '' }}
        render={({ formState }) => (
          <React.Fragment>
            <InputField
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
            <InputField
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
            <Button
              type="submit"
              disabled={
                (!formState.isValid &&
                  formState.isSubmitted) ||
                formState.isSubmitting
              }
            >
              Submit
            </Button>
          </React.Fragment>
        )}
      />,
    );
    expect(getByLabelText('Email')).toBeTruthy();
    expect(getByLabelText('Password')).toBeInTheDocument();

    const submitButton = getByText('Submit');
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);
    expect(submitButton).toBeDisabled();

    const emailField = getByPlaceholderText(
      'Enter your email',
    );
    const passwordField = getByPlaceholderText(
      'Enter your password',
    );

    fireEvent.change(emailField, {
      target: { value: 'user1@admin.com' },
    });

    fireEvent.change(passwordField, {
      target: { value: 'admin' },
    });

    fireEvent.click(submitButton);
  });

  it('should render a form with array fields', () => {});
});
