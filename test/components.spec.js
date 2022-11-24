import { welcome } from '../src/components/Welcome.js';

jest.mock('../src/lib/imports.js');

describe('welcome', () => {
  it('debería ser una función', () => {
    expect(typeof welcome).toBe('function');
  });

  it('debería retornar un string', () => {
    expect(typeof welcome()).toBe('string');
  });

  it('Deberia ser un enlace que redireccione a #login', () => {
    document.body.innerHTML = welcome();
    expect(document.querySelector('#login').getAttribute('href')).toBe('#login');
  });

  it('Deberia ser un enlace que redireccione a #registrar', () => {
    document.body.innerHTML = welcome();
    expect(document.querySelector('#register').getAttribute('href')).toBe('#registrar');
  });
});
