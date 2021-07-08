import React from 'react';
import { Field } from 'redux-form';
import { renderField } from '../lib/renderField';

export const PizzaInput = () => {
  return (
    <>
      <Field
        name='no_of_slices'
        component={renderField}
        label='Number of slices'
        type='number'
        min='0'
        step='1'
      />
      <Field
        name='diameter'
        component={renderField}
        label='Diameter'
        type='number'
        min='20'
        step='5'
        placeholder='20-60 cm'
      />
    </>
  );
};
