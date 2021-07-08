import React from 'react';
import PrimaryMenuForm from '../components/PrimaryMenuForm';
import { SubmissionError } from 'redux-form';

import '../css/Form.css';

export const MenuForm = () => {
  const postValues = async (data) => {
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(endpoint, options)
      .then((res) => res.json())
      .then((res) =>
        window.alert(
          `Congratulations, You submitted:\n\n${JSON.stringify(res, null, 2)}`
        )
      )
      .catch((error) => {
        if (error.validationErrors) {
          throw new SubmissionError(error.validationErrors);
        } else {
          console.log(error);
        }
      });
  };

  const handleSubmit = (values) => {
    postValues(values);
  };

  return (
    <div className='menu_container'>
      <PrimaryMenuForm onSubmit={handleSubmit} />
    </div>
  );
};
