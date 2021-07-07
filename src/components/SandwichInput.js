import React from 'react';
import { Field } from 'redux-form';

export const SandwichInput = () => {
  return (
    <div>
      <label htmlFor='slices_of_bread'>Slices of bread</label>
      <Field
        name='slices_of_bread'
        component='input'
        type='number'
        min='0'
        max='4'
        step='1'
      />
    </div>
  );
};
