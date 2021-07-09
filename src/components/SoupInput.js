import React from 'react';
import { Field } from 'redux-form';
import { renderField } from '../lib/renderField';
import '../css/Field.css';

export const SoupInput = () => {
  return (
    <Field
      name='spiciness_scale'
      label='Spiciness scale'
      component={renderField}
      type='number'
      min='0'
      step='1'
    />
  );
};
