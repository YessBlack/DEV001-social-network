import { registro } from '../src/components/registro';

/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

jest.mock('../src/main.js');

describe('registro', () => {
  it('El componente debería ser una función', () => {
    expect(typeof registro).toBe('function');
  });
  it('El componente debería retornar un string', () => {
    expect(typeof registro()).toBe('string');
  });
});
