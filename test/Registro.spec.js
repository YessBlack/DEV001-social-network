import { registro, eventsRegistro } from '../src/components/Registro.js';
// eslint-disable-next-line import/named
import {
  getAuth,
  signInWithPopup,
  // eslint-disable-next-line import/named
  googleAuthProviderHelper,
  createUserWithEmailAndPassword,
} from '../src/lib/imports.js';

jest.mock('../src/lib/imports.js');

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
    createUserWithEmailAndPassword.mockImplementationOnce(() => Promise.resolve({}));
    const event = new Event('submit');
    $('#formRegister').dispatchEvent(event);
    window.addEventListener('hashchange', () => {
      expect(window.location.hash).toBe('#timeline');
      done();
    });
  });

  it('Deberia disparar un evento click para registrar con Google', (done) => {
    window.location.hash = '#registrar';

    getAuth.mockImplementationOnce(() => 'hola');
    signInWithPopup.mockImplementationOnce((auth) => {
      expect(auth).toBe('hola');
      expect(googleAuthProviderHelper).toHaveBeenCalled();
      return Promise.resolve();
    });

    $('#registerGoogle').click();
    setTimeout(() => {
      expect(window.location.hash).toBe('#timeline');
      done();
    }, 1000);
  });
});
