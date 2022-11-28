import {
  createUser,
  loginUser,
  loginGoogle,
  resetPasswordEmail,
  signOutUser,
} from '../src/lib/auth.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
} from '../src/lib/imports.js';

jest.mock('../src/lib/imports.js');

describe('createUser', () => {
  beforeEach(() => {
    getAuth.mockImplementationOnce(() => 'hola');
    createUserWithEmailAndPassword.mockImplementation(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });

  it('Deberia retornar una promesa', () => {
    expect(createUser()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(createUser()).resolves.toBe('resolve');
  });
});

describe('login', () => {
  beforeEach(() => {
    getAuth.mockImplementationOnce(() => 'hola');
    signInWithEmailAndPassword.mockImplementation(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });

  it('Deberia retornar una promesa', () => {
    expect(loginUser()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(loginUser()).resolves.toBe('resolve');
  });
});

describe('loginGoogle', () => {
  beforeEach(() => {
    getAuth.mockImplementationOnce(() => 'hola');
    signInWithPopup.mockImplementationOnce(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });

  it('Deberia retornar una promesa', () => {
    expect(loginGoogle()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(loginGoogle()).resolves.toBe('resolve');
  });
});

describe('resetPasswordEmail', () => {
  beforeEach(() => {
    getAuth.mockImplementationOnce(() => 'hola');
    sendPasswordResetEmail.mockImplementation(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof resetPasswordEmail).toBe('function');
  });
  it('Deberia retornar una promesa', () => {
    expect(resetPasswordEmail()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(resetPasswordEmail()).resolves.toBe('resolve');
  });
});

describe('signOutUser', () => {
  beforeEach(() => {
    getAuth.mockImplementationOnce(() => 'hola');
    signOut.mockImplementationOnce(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof signOutUser).toBe('function');
  });

  it('Deberia retornar una promesa', () => {
    expect(signOutUser()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(signOutUser()).resolves.toBe('resolve');
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
