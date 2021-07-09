import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { NameInput } from './NameInput';
import { PreparationInput } from './PreparationInput';
import { TypeInput } from './TypeInput';
import { PizzaInput } from './PizzaInput';
import { SoupInput } from './SoupInput';
import { SandwichInput } from './SandwichInput';
import { validate } from '../lib/validate';
import '../css/Button.css';
import '../css/Form.css';

let PrimaryMenuForm = (props) => {
  const { hasTypeValue, handleSubmit, pristine, reset, submitting } = props;

  return (
    <form className='menu_form' onSubmit={handleSubmit}>
      <h1>Menu Form</h1>
      <div className='form_container'>
        <div className='form_item'>
          <h2 className='form_item_title'>Primary information</h2>
          <NameInput />
          <PreparationInput />
          <TypeInput />
        </div>
        <div className='form_item'>
          <h2 className='form_item_title'>Additional information</h2>
          {!hasTypeValue ? (
            <h3>Please, choose the meal type</h3>
          ) : (
            (hasTypeValue === 'pizza' && <PizzaInput />) ||
            (hasTypeValue === 'soup' && <SoupInput />) ||
            (hasTypeValue === 'sandwich' && <SandwichInput />)
          )}
        </div>
      </div>

      <div className='btn_wrapper'>
        <button className='btn primary_btn' type='submit' disabled={submitting}>
          Submit
        </button>
        <button
          className='btn secondary_btn'
          type='button'
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
      </div>
    </form>
  );
};

PrimaryMenuForm = reduxForm({
  form: 'menuForm',
  validate,
})(PrimaryMenuForm);

const selector = formValueSelector('menuForm');
PrimaryMenuForm = connect((state) => {
  const hasTypeValue = selector(state, 'type');

  return {
    hasTypeValue,
  };
})(PrimaryMenuForm);

export default PrimaryMenuForm;
