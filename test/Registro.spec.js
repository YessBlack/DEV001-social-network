import { registro, eventsRegistro } from '../src/components/Registro.js';
import { createUser, loginGoogle, updateProfileUser } from '../src/lib/auth.js';

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

  /*
  it('Deberia cambiar a timeline si el usuario se registra', (done) => {
    window.location.hash = '#registrar';
    const event = new Event('submit');
    $('#email').value = 'resolve@gmail.com';
    $('#password').value = '123hdfh';
    $('#name').value = 'nombre';
    $('#formRegister').dispatchEvent(event);
    setTimeout(() => {
      expect(window.location.hash).toBe('#timeline');
      done();
    }, 1000);
  });
*/

  it('Deberia disparar un evento submit para registrar con email y password', () => {
    window.location.hash = '#registrar';
    const event = new Event('submit');

    $('#email').value = 'resolve@gmail.com';
    $('#password').value = '123hdfh';
    $('#name').value = 'nombre';

    const promise1 = Promise.resolve({});
    createUser.mockImplementationOnce(() => promise1);
    const promise2 = Promise.resolve({});
    updateProfileUser.mockImplementationOnce(() => promise2);

    $('#formRegister').dispatchEvent(event);

    return Promise.all([promise1, promise2]).then(() => {
      expect(window.location.hash).toBe('#timeline');
    });
  });

  it('Deberia mostrar un error si el email no es valido', (done) => {
    window.location.hash = '#registrar';
    const event = new Event('submit');
    $('#email').value = 'reject@gmail.com';
    $('#password').value = '123hdfh';
    $('#formRegister').dispatchEvent(event);
    setTimeout(() => {
      const promise = createUser('reject@gmail.com', '123hdfh');
      promise
        .catch((error) => {
          expect(error.code).toBe('auth/email-already-in-use');
          done();
        });
    }, 1000);
  });

  it('Deberia mostrar un error si la contraseña es muy corta', (done) => {
    window.location.hash = '#registrar';
    const event = new Event('submit');
    $('#email').value = 'reject1@gmail.com';
    $('#password').value = '123h';
    $('#formRegister').dispatchEvent(event);
    setTimeout(() => {
      const promise = createUser('reject1@gmail.com', '123f');
      promise
        .catch((error) => {
          expect(error.code).toBe('auth/weak-password');
          done();
        });
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
