import {
  createUser,
  loginUser,
  authenticationGoogle,
  resetPasswordEmail,
  signOutUser,
} from '../src/lib/auth.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  // eslint-disable-next-line import/named
  googleAuthProviderHelper,
  sendPasswordResetEmail,
  signOut,
} from '../src/lib/imports.js';

jest.mock('../src/lib/imports.js');

describe('createUser', () => {
  it('Debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
  it('Deberia retornar una promesa', () => {
    getAuth.mockImplementationOnce(() => 'hola');
    createUserWithEmailAndPassword.mockImplementationOnce(() => Promise.resolve({}));
    expect(createUser()).toBeInstanceOf(Promise);
  });
  it('Debería retornar un objeto', () => {
    createUserWithEmailAndPassword.mockImplementationOnce(() => Promise.resolve({}));
    createUser().then((res) => {
      expect(typeof res).toBe('object');
    });
  });
});

describe('login', () => {
  it('Debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
  it('Deberia retornar una promesa', () => {
    signInWithEmailAndPassword.mockImplementationOnce(() => Promise.resolve({}));
    expect(loginUser()).toBeInstanceOf(Promise);
  });
  it('Debería retornar un objeto', () => {
    signInWithEmailAndPassword.mockImplementationOnce(() => Promise.resolve({}));
    loginUser().then((res) => {
      expect(typeof res).toBe('object');
    });
  });
});

describe('authenticationGoogle', () => {
  it('Debería ser una función', () => {
    expect(typeof authenticationGoogle).toBe('function');
  });
  it('Deberia retornar una promesa', () => {
    getAuth.mockImplementationOnce(() => 'hola');
    signInWithPopup.mockImplementationOnce((auth) => {
      expect(auth).toBe('hola');
      expect(googleAuthProviderHelper).toHaveBeenCalled();
      return Promise.resolve({});
    });
    expect(authenticationGoogle()).toBeInstanceOf(Promise);
  });
  it('Debería retornar un objeto', () => {
    signInWithPopup.mockImplementationOnce(() => Promise.resolve({}));
    authenticationGoogle().then((res) => {
      expect(typeof res).toBe('object');
    });
  });
});

describe('resetPasswordEmail', () => {
  it('Debería ser una función', () => {
    expect(typeof resetPasswordEmail).toBe('function');
  });
  it('Deberia retornar una promesa', () => {
    sendPasswordResetEmail.mockImplementationOnce(() => Promise.resolve({}));
    expect(resetPasswordEmail()).toBeInstanceOf(Promise);
  });
  it('Debería retornar un objeto', () => {
    sendPasswordResetEmail.mockImplementationOnce(() => Promise.resolve({}));
    resetPasswordEmail().then((res) => {
      expect(typeof res).toBe('object');
    });
  });
});

describe('signOutUser', () => {
  it('Debería ser una función', () => {
    expect(typeof signOutUser).toBe('function');
  });
  it('Deberia retornar una promesa', () => {
    signOut.mockImplementationOnce(() => Promise.resolve({}));
    expect(signOutUser()).toBeInstanceOf(Promise);
  });
  it('Debería retornar un objeto', () => {
    signOut.mockImplementationOnce(() => Promise.resolve({}));
    signOutUser().then((res) => {
      expect(typeof res).toBe('object');
    });
  });
});
