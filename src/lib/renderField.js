import React from 'react';
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
  <div className='field'>
    <label className='field_label'>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        min={min}
        max={max}
        step={step}
        className='field_input'
      />
      {touched && error && <span className='err_message'>{error}</span>}
    </div>
  </div>
);
