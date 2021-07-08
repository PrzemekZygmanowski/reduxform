import React from 'react';
import { Field } from 'redux-form';
import '../css/Field.css';

const SelectField = ({
  input,
  label,
  placeholder,
  meta: { touched, error },
  children,
}) => (
  <div className='field'>
    <label className='field_label'>{label}</label>
    <div>
      <div>
        <select className='field_input' {...input} placeholder={placeholder}>
          {children}
        </select>
        {touched && error && <span className='err_message'>{error}</span>}
      </div>
    </div>
  </div>
);

export const TypeInput = () => {
  return (
    <Field
      name='type'
      label='Dish Type'
      component={SelectField}
      placeholder='Dish Type'
    >
      <option />
      <option value='pizza'>Pizza</option>
      <option value='soup'>Soup</option>
      <option value='sandwich'>Sandwich</option>
    </Field>
  );
};
