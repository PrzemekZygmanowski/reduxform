import React from 'react';
import { Field } from 'redux-form';

export const TypeInput = () => {
  return (
    <div>
      <label htmlFor='type'>Dish Type</label>
      <Field name='type' component='select'>
        <option />
        <option value='pizza'>Pizza</option>
        <option value='soup'>Soup</option>
        <option value='sandwich'>Sandwich</option>
      </Field>
    </div>
  );
};
