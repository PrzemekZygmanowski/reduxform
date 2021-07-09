import React from 'react';
import { Field } from 'redux-form';

import '../css/Field.css';

export const renderField = ({
  input,
  type,
  placeholder,
  min,
  max,
  step,
  meta: { touched, error },
}) => (
  <div>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      min={min}
      max={max}
      step={step}
      className='field_input field_input_time'
    />
    <div className='err_item'>
      {touched && error && <span className='err_message'>{error}</span>}
    </div>
  </div>
);

export const PreparationInput = () => {
  return (
    <div className='field'>
      <label className='field_label'>Preparation Time</label>
      <div className='field_time'>
        <Field
          name='hours'
          type='number'
          placeholder='HH'
          component={renderField}
          min='00'
          max='24'
          step='1'
        />

        <Field
          name='minutes'
          type='number'
          placeholder='MM'
          component={renderField}
          min='00'
          max='60'
          step='1'
        />

        <Field
          name='seconds'
          type='number'
          placeholder='SS'
          component={renderField}
          min='00'
          max='60'
          step='1'
        />
      </div>
    </div>
  );
};
