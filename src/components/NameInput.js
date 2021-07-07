import React from 'react';
import { Field } from 'redux-form';

export const NameInput = () => {
  return (
    <div>
      <label htmlFor='name'>Dish Name</label>
      <Field name='name' component='input' type='text' />
    </div>
  );
};
