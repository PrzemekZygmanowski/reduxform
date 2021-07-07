import React from 'react';
import { Field } from 'redux-form';
import { renderField } from '../lib/renderField';

export const NameInput = () => {
  return (
    <Field name='name' type='text' component={renderField} label='Dish Name' />
  );
};
