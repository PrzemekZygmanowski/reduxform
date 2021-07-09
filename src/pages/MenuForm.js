import React from 'react';
import PrimaryMenuForm from '../components/PrimaryMenuForm';
import { SubmissionError } from 'redux-form';
import '../css/Form.css';

const formatNumber = (d) => {
  return d < 10 ? '0' + d.toString() : d.toString();
};

export const MenuForm = () => {
  const postValues = async (data) => {
    const endpoint = 'https://frosty-wood-6558.getsandbox.com:443/dishes';

    const valuesToSubmit = {
      name: data.name,
      preparation_time:
        formatNumber(data.hours) +
        ':' +
        formatNumber(data.hours) +
        ':' +
        formatNumber(data.hours),
      type: data.type,
      no_of_slices: data.no_of_slices && +data.no_of_slices,
      diameter: data.diameter && +data.diameter,
      spiciness_scale: data.spiciness_scale && +data.spiciness_scale,
      slices_of_bread: data.slices_of_bread && +data.slices_of_bread,
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(valuesToSubmit),
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
