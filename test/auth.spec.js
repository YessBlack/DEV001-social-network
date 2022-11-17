/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import { createUser } from '../src/lib/auth.js';

jest.mock('../src/__mocks__/imports-mock.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
  it('debería retornar una promesa', () => {
    expect(createUser()).toBeInstanceOf('promise');
  });
});
