import React from 'react';

export const renderField = ({
  input,
  label,
  type,
  min,
  max,
  step,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        min={min}
        max={max}
        step={step}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
