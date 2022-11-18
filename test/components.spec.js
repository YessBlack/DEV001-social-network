import { registro, eventsRegistro } from '../src/components/Registro';

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

describe('eventsRegistro', () => {
  it('El componente debería ser una función', () => {
    expect(typeof eventsRegistro).toBe('function');
  });
});
