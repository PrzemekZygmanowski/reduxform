import React from 'react';
import { Field } from 'redux-form';
import '../css/Field.css';

export const renderField = ({
  input,
  label,
  type,
  min,
  max,
  step,
  meta: { touched, error },
}) => (
  <div className='field_range'>
    <label className='field_label'>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        min={min}
        max={max}
        step={step}
        className='field_input_range'
      />
      {touched && error && <span className='err_message'>{error}</span>}
    </div>
  </div>
);

export const SoupInput = () => {
  return (
    <div>
      <Field
        name='spiciness_scale'
        label='Spiciness scale'
        component={renderField}
        type='range'
        min='0'
        max='10'
        step='1'
      />
    </div>
  );
};
