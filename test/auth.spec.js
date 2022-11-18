import { createUser, loginUser, authenticationGoogle, resetContraseña } from '../src/lib/auth.js';

jest.mock('../src/lib/imports.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
  it('debería retornar una promesa', () => {
    expect(createUser()).toBeInstanceOf(Promise);
  });
});

describe('loginUser', () => {
  it('debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('debería retornar una promesa', () => {
    expect(loginUser()).toBeInstanceOf(Promise);
  });
});

describe('authenticationGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof authenticationGoogle).toBe('function');
  });
  it('debería retornar una promesa', () => {
    expect(authenticationGoogle()).toBeInstanceOf(Promise);
  });
});

describe('resetContraseña', () => {
  it('debería ser una función', () => {
    expect(typeof resetContraseña).toBe('function');
  });
  it('debería retornar una promesa', () => {
    expect(resetContraseña()).toBeInstanceOf(Promise);
  });
});
