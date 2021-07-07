import React from 'react';
import PrimaryMenuForm from '../components/PrimaryMenuForm';

export const MenuForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return <PrimaryMenuForm onSubmit={handleSubmit} />;
};
