import { registro } from '../src/components/Registro.js';
import { login } from '../src/components/Login.js';
import { welcome } from '../src/components/Welcome.js';

/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

describe('registro', () => {
  it('debería ser una función', () => {
    expect(typeof registro).toBe('function');
  });
  it('debería retornar un string', () => {
    expect(typeof registro()).toBe('string');
  });
});

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
  it('debería retornar un string', () => {
    expect(typeof login()).toBe('string');
  });
});

describe('welcome', () => {
  it('debería ser una función', () => {
    expect(typeof welcome).toBe('function');
  });
  it('debería retornar un string', () => {
    expect(typeof welcome()).toBe('string');
  });
});
