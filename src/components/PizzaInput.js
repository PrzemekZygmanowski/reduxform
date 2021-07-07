import React from 'react';
import { Field } from 'redux-form';

export const PizzaInput = () => {
  return (
    <>
      <div>
        <label htmlFor='no_of_slices'>Number of slices</label>
        <Field
          name='no_of_slices'
          component='input'
          type='number'
          min='0'
          max='10'
          step='1'
        />
      </div>
      <div>
        <label htmlFor='diameter'>Diameter in cm</label>
        <Field
          name='diameter'
          component='input'
          type='number'
          min='20'
          max='60'
          step='5'
          placeholder='20-60 cm'
        />
      </div>
    </>
  );
};
