import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { NameInput } from './NameInput';
import { PreparationInput } from './PreparationInput';
import { TypeInput } from './TypeInput';
import { PizzaInput } from './PizzaInput';
import { SoupInput } from './SoupInput';
import { SandwichInput } from './SandwichInput';

let PrimaryMenuForm = (props) => {
  const { hasTypeValue, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Menu Form</h1>
      <h2>Primary Fields</h2>
      <NameInput />
      <PreparationInput />
      <TypeInput />
      <h2>Additional Fields</h2>
      {!hasTypeValue ? (
        <h2>Please, choose the meal type</h2>
      ) : (
        (hasTypeValue === 'pizza' && <PizzaInput />) ||
        (hasTypeValue === 'soup' && <SoupInput />) ||
        (hasTypeValue === 'sandwich' && <SandwichInput />)
      )}
      <button type='submit'>Submit</button>
    </form>
  );
};

PrimaryMenuForm = reduxForm({
  form: 'menuForm',
})(PrimaryMenuForm);

const selector = formValueSelector('menuForm');
PrimaryMenuForm = connect((state) => {
  const hasTypeValue = selector(state, 'type');
  return {
    hasTypeValue,
  };
})(PrimaryMenuForm);

export default PrimaryMenuForm;
