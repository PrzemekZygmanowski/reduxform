export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Sorry, You have to name your dish';
  }

  if (!values.preparation_time) {
    errors.preparation_time = 'Sorry, You have to set preparation time';
  }

  if (!values.type) {
    errors.type = 'Sorry, dish type is required';
  }

  if (!values.no_of_slices) {
    errors.no_of_slices = 'It will be easier to eat after we divide the pizza';
  } else if (+values.no_of_slices > 10) {
    errors.no_of_slices =
      'Dividing a pizza into 10 pieces is already difficult enough ';
  }

  if (!values.diameter) {
    errors.diameter = "Don't be shy";
  } else if (+values.diameter > 60) {
    errors.diameter = "We don't have such large plates and pizza boxes";
  }

  if (!values.slices_of_bread) {
    errors.slices_of_bread = "Don't be shy";
  } else if (+values.slices_of_bread > 4) {
    errors.slices_of_bread = '4 is such a beautiful number';
  }
  return errors;
};
