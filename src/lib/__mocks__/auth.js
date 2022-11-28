export const createUser = jest.fn((email, password) => {
  if (email === 'resolve@gmail.com') {
    return Promise.resolve();
  }
  if (email === 'reject@gmail.com') {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ code: 'auth/email-already-in-use', delete: 'borrame' });
  }
  if (email === 'reject1@gmail.com' && password.length < 6) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ code: 'auth/weak-password', delete: 'borrame' });
  }
  return '';
});

export const loginUser = jest.fn();
export const loginGoogle = jest.fn();
export const authenticationEmail = jest.fn();
export const resetPasswordEmail = jest.fn();
export const signOutUser = jest.fn();
