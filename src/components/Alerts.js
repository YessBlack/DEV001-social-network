export const alertSuccess = (message) => {
  const $alertSuccess = document.createElement('div');
  $alertSuccess.classList.add('alert-success');
  $alertSuccess.textContent = message;
  return $alertSuccess;
};

export const alertError = (message) => {
  const $alertError = document.createElement('div');
  $alertError.classList.add('alert-error');
  $alertError.textContent = message;
  return $alertError;
};
