import { registro } from '../src/components/registro';

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
