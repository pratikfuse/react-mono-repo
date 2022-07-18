import { validateOptions } from '@storybook/store';
import { useCallback } from 'react';
import { FieldError, get } from 'react-hook-form';
import * as yup from 'yup';

export function getValidationMessage(
  fieldName: string,
  errors: FieldError,
): string | undefined {
  const error = get(errors, fieldName);

  if (!error) return;

  switch (error.type) {
    case 'required':
      return 'field is required';
    default:
      return error[0];
  }
}

export function useYupValidationResolver(
  // TODO fix types
  validationSchema: yup.ObjectSchema<any>,
) {
  return useCallback(
    async (data: any) => {
      try {
        const values = await validationSchema.validate(
          data,
          {
            abortEarly: false,
          },
        );

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            // TODO fix types
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {},
          ),
        };
      }
    },
    [validationSchema],
  );
}

function parseValidationObject(
  key: string,
  object: any,
  validationObject: any,
) {
  if (typeof object === 'object') {
    parseValidationObject(key, object, validationObject);
  }

  if (object.required) {
    if (validationObject[key]) {
      validationObject[key] =
        validationObject[key].required();
    }
  }

  if (object.type) {
    if (validationObject[key]) {
    }
  }
}

export function validationSchemaParser(
  schema: any,
): yup.ObjectSchema<any> {
  const validationObject: any = {};
  Object.keys(schema).forEach((key: any) =>
    parseValidationObject(
      key,
      schema[key],
      validateOptions,
    ),
  );

  return yup.object(validationObject);
}
