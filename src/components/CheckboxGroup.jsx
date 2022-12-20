import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => {
            return (
              <>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option?.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckboxGroup;
