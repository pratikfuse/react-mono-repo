import {
  cleanup,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Button from '../Button';
import FormWrapper from '../Form/FormWrapper';
import InputField from '../InputField';
describe('Form UI', () => {
  afterEach(cleanup);

  it('should render a form with text fields and submit button', async () => {
    const submitHandler = jest.fn();

    render(
      <FormWrapper
        handleSubmit={submitHandler}
        initialData={{
          email: '',
          password: '',
        }}
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

    const emailField = screen.getByTestId('test-email');
    const passwordField =
      screen.getByTestId('test-password');

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton);
    // button should be disabled for invalid form
    expect(submitButton).toBeDisabled();

    await userEvent.type(emailField, 'user1@admin.com');
    await userEvent.type(passwordField, 'admin');

    expect(submitButton).toBeEnabled();

    await userEvent.click(submitButton);

    expect(submitHandler).toBeCalledWith({
      email: 'user1@admin.com',
      password: 'admin',
    });
  });

  it('should render a form with array fields', () => {});
});
