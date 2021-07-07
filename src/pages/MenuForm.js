import React from 'react';
import PrimaryMenuForm from '../components/PrimaryMenuForm';
import { SubmissionError } from 'redux-form';

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
      .then((res) => console.log(res))
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

  return <PrimaryMenuForm onSubmit={handleSubmit} />;
};
