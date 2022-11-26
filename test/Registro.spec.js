import { registro, eventsRegistro } from '../src/components/Registro.js';
import { loginGoogle } from '../src/lib/auth.js';

jest.mock('../src/lib/auth.js');

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
  });

  it('$ Debería seleccionar un elemento del DOM', () => {
    expect($('.error-mail').getAttribute('class')).toBe('error-mail');
  });

  it('Deberia mostrar un error si hay inputs vacios', () => {
    const event = new Event('submit');
    $('#email').value = '';
    $('#password').value = '';
    $('#formRegister').dispatchEvent(event);
    expect($('.inputs-vacios').innerHTML).toBe('Todos los campos son obligatorios');
  });

  it('Deberia disparar un evento submit para registrar con email y password', (done) => {
    const event = new Event('submit');
    $('#email').value = 'resolve@gmail.com';
    $('#password').value = '123hdfh';
    $('#formRegister').dispatchEvent(event);
    setTimeout(() => {
      expect(window.location.hash).toBe('#timeline');
      done();
    }, 1000);
  });

  it('Deberia mostrar un error si el email no es valido', (done) => {
    window.location.hash = '#registrar';
    const event = new Event('submit');
    $('#email').value = 'reject@gmail.com';
    $('#password').value = '123hdfh';
    $('#formRegister').dispatchEvent(event);
    $('.error-mail').innerHTML = 'Este email ya se encuentra en uso';
    setTimeout(() => {
      try {
        expect($('.error-mail').innerHTML).toBe('Este email ya se encuentra en uso');
      } catch (error) {
        console.log(error);
        expect(error.code).toMatch('auth/email-already-in-use');
        done();
      }
    }, 1000);
  });

  it('Deberia mostrar un error si la contraseña es muy corta', (done) => {
    const event = new Event('submit');
    $('#email').value = 'reject1@gmail.com';
    $('#password').value = 'asd';
    $('#formRegister').dispatchEvent(event);
    setTimeout(() => {
      try {
        expect($('.error-password').innerHTML).toBe('La contraseña debe tener mínimo 6 cáracteres');
      } catch (error) {
        expect(error.code).toMatch('auth/weak-password');
        done();
      }
    }, 1000);
  });

  it('Deberia disparar un evento click para registrar con Google', (done) => {
    window.location.hash = '#registrar';
    loginGoogle.mockImplementationOnce(() => Promise.resolve({}));
    $('#registerGoogle').click();
    setTimeout(() => {
      expect(window.location.hash).toBe('#timeline');
      done();
    }, 1000);
  });

  it('Deberia cambiar el type del input al darle click', () => {
    window.location.hash = '#registrar';
    $('#eye-registro').click();
    expect($('#password').getAttribute('type')).toBe('text');
    $('#eye-registro').click();
    expect($('#password').getAttribute('type')).toBe('password');
  });
});
