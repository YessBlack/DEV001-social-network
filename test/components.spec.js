import { registro, eventsRegistro } from '../src/components/Registro.js';
import { welcome } from '../src/components/Welcome.js';
// eslint-disable-next-line import/named
import {
  getAuth,
  signInWithPopup,
  // eslint-disable-next-line import/named
  googleAuthProviderHelper,
  createUserWithEmailAndPassword,
} from '../src/lib/imports.js';

jest.mock('../src/lib/imports.js');
/**
 * @jest-environment jsdom
 */

beforeEach(() => {
  document.body.innerHTML = registro();
  eventsRegistro();
});
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
describe('registro', () => {
  it('Debería ser una función', () => {
    expect(typeof registro).toBe('function');
  });

  it('Debería retornar un string', () => {
    expect(typeof registro()).toBe('string');
  });
});

describe('eventsRegistro', () => {
  const $ = (selector) => document.querySelector(selector);

  beforeEach(() => {
    document.body.innerHTML = registro();
    eventsRegistro();
  });

  it('Debería ser una función', () => {
    expect(typeof eventsRegistro).toBe('function');
  });

  it('$ Deberia ser una funcion para selectores de DOM', () => {
    expect(typeof $).toBe('function');
    expect($('.error-mail').getAttribute('class')).toBe('error-mail');
  });

  it('Deberia disparar un evento submit para registrar con email y password', (done) => {
    createUserWithEmailAndPassword.mockImplementation(() => Promise.resolve({}));
    const event = new Event('submit');
    $('#formRegister').dispatchEvent(event);
    expect(event.type).toBe('submit');
    window.addEventListener('hashchange', () => {
      expect(window.location.hash).toBe('#timeline');
      done();
    });
  });

  it('Deberia disparar un evento click para registrar con Google', (done) => {
    getAuth.mockImplementationOnce(() => 'hola');
    signInWithPopup.mockImplementationOnce((auth) => {
      expect(auth).toBe('hola');
      expect(googleAuthProviderHelper).toHaveBeenCalled();
      return Promise.resolve();
    });
    window.addEventListener('hashchange', () => {
      expect(window.location.hash).toBe('#timeline');
      done();
    });
    $('#registerGoogle').dispatchEvent(new Event('click'));
  });
});
