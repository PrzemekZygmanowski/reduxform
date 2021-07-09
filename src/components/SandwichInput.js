import React from 'react';
import { Field } from 'redux-form';
import { renderField } from '../lib/renderField';

export const SandwichInput = () => {
  return (
    <Field
      name='slices_of_bread'
      component={renderField}
      label='Slices of bread'
      type='number'
      min='1'
      step='1'
    />
  );
};
