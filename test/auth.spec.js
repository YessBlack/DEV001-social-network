import {
  createUser,
  loginUser,
  authenticationGoogle,
  resetPasswordEmail,
  signOutUser,
} from '../src/lib/auth.js';

import { getAuth, createUserWithEmailAndPassword } from '../src/lib/imports.js';

jest.mock('../src/lib/imports.js');

describe('createUser', () => {
  it('Debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
  /*
  it('Deberia retornar una promesa', () => {
    getAuth.mockImplementationOnce(() => 'hola');
    const create = createUserWithEmailAndPassword.mockImplementation(() => Promise.resolve({}));
    expect(createUser('email', 'password')).toBeInstanceOf(Promise);
  });
  it('Debería retornar un objeto', () => {
    createUser().then((res) => {
      expect(typeof res).toBe('object');
    });
  });
  */
});
describe('loginUser', () => {
  it('Debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('Deberia retornar una promesa', () => {
    expect(loginUser()).toBeInstanceOf(Promise);
  });
  it('Debería retornar un objeto', () => {
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
    expect(authenticationGoogle()).toBeInstanceOf(Promise);
  });
  it('Debería retornar un objeto', () => {
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
    expect(resetPasswordEmail()).toBeInstanceOf(Promise);
  });
  it('Debería retornar un objeto', () => {
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
    expect(signOutUser()).toBeInstanceOf(Promise);
  });
  it('Debería retornar un objeto', () => {
    signOutUser().then((res) => {
      expect(typeof res).toBe('object');
    });
  });
});
