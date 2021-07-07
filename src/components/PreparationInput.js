import React from 'react';
import { Field } from 'redux-form';

export const PreparationInput = () => {
  return (
    <div>
      <label htmlFor='preparation_time'>Preparation Time</label>
      <Field name='preparation_time' component='input' type='time' />
    </div>
  );
};
