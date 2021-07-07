import React from 'react';
import PrimaryMenuForm from '../components/PrimaryMenuForm';
import { axios } from 'axios';

export const MenuForm = () => {
  const postValues = async (data) => {
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';

    const postFormValues = await axios.post(endpoint, data);

    if (postFormValues.status === 200 && postFormValues.data) {
      console.log(`udalo sie wyslac: ${postFormValues.data}`);
      return postFormValues.data;
    } else {
      console.log('values can not be post');
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
    postValues(values);
  };

  return <PrimaryMenuForm onSubmit={handleSubmit} />;
};
