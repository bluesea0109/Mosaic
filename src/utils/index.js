export const genAction = (action) => ({
  REQUEST: `${action}_REQUEST`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
});

export const fetchError = (error) => {
  if (typeof error === 'string') {
    return error;
  }

  if (typeof error.data === 'undefined') {
    return error.statusText || '';
  }

  for (let err in error.data.errors) {
    return `${err} ${error.data.errors[err].toString()}`;
  }

  return 'Unknown Error';
};
