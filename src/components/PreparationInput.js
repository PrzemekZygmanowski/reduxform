import React from 'react';
import { Field } from 'redux-form';
import { renderField } from '../lib/renderField';

export const PreparationInput = () => {
  return (
    <Field
      name='preparation_time'
      type='time'
      component={renderField}
      label='Preparation Time'
    />
  );
};
