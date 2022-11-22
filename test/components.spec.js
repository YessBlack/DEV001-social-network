import { registro, eventsRegistro } from '../src/components/Registro.js';
import { welcome } from '../src/components/Welcome.js';
// eslint-disable-next-line import/named
import { getAuth, signInWithPopup, googleAuthProviderHelper } from '../src/lib/imports.js';

jest.mock('../src/lib/imports.js');
/**
 * @jest-environment jsdom
 */

describe('welcome', () => {
  it('debería ser una función', () => {
    expect(typeof welcome).toBe('function');
  });

  it('debería retornar un string', () => {
    expect(typeof welcome()).toBe('string');
  });

  it('Deberia ser un enlace que redireccione a #login', () => {
    const div = document.createElement('div');
    div.innerHTML = welcome();
    expect(div.querySelector('#login').getAttribute('href')).toBe('#login');
  });

  it('Deberia ser un enlace que redireccione a #registrar', () => {
    const div = document.createElement('div');
    div.innerHTML = welcome();
    expect(div.querySelector('#register').getAttribute('href')).toBe('#registrar');
  });
});
describe('registro', () => {
  it('Debería ser una función', () => {
    expect(typeof registro).toBe('function');
  });

  it('Debería retornar un string', () => {
    expect(typeof registro()).toBe('string');
  });
});

describe('eventsRegistro', () => {
  it('Debería ser una función', () => {
    expect(typeof eventsRegistro).toBe('function');
  });

  it('$ Deberia ser una funcion para selectores de DOM', () => {
    const $ = (selector) => document.querySelector(selector);
    document.body.innerHTML = registro();
    expect(typeof $).toBe('function');
    expect($('.error-mail').getAttribute('class')).toBe('error-mail');
  });

  it('Deberia disparar un evento click para registrar con Google', (done) => {
    getAuth.mockImplementationOnce(() => 'hola');
    signInWithPopup.mockImplementationOnce((auth) => {
      expect(auth).toBe('hola');
      expect(googleAuthProviderHelper).toHaveBeenCalled();
      return Promise.resolve();
    });
    const div = document.createElement('div');
    div.innerHTML = registro();
    document.body.appendChild(div);
    eventsRegistro();
    window.addEventListener('hashchange', () => {
      expect(window.location.hash).toBe('#timeline');
      done();
    });
    const btn = document.querySelector('#registerGoogle');
    btn.dispatchEvent(new Event('click'));
  });
});
