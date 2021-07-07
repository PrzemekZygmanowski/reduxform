import React from 'react';
import { Field } from 'redux-form';

const SelectField = ({ input, label, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <div>
        <select {...input}>{children}</select>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
);

export const TypeInput = () => {
  return (
    <Field name='type' label='Dish Type' component={SelectField}>
      <option />
      <option value='pizza'>Pizza</option>
      <option value='soup'>Soup</option>
      <option value='sandwich'>Sandwich</option>
    </Field>
  );
};
