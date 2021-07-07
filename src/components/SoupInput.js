import React from 'react';
import { Field } from 'redux-form';

export const SoupInput = () => {
  return (
    <div>
      <label htmlFor='spiciness_scale'>Spiciness scale</label>
      <Field
        name='spiciness_scale'
        component='input'
        type='range'
        min='0'
        max='10'
        step='1'
      />
    </div>
  );
};
