import { Router, exeEvents } from '../src/components/Router.js';
import { welcome } from '../src/components/Welcome.js';
import { registro } from '../src/components/Registro.js';
import { login } from '../src/components/Login.js';
import { timeline } from '../src/components/Timeline.js';
import { resetPassword } from '../src/components/Recuperar.js';

describe('Router', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof Router).toBe('function');
  });

  it('Deberia retornar un string', () => {
    expect(typeof Router()).toBe('string');
  });

  it('Deberia retornar welcome si el hash es #/', () => {
    window.location.hash = '#/';
    expect(Router()).toBe(welcome());
  });

  it('Deberia retornar registro si el hash es #registrar', () => {
    window.location.hash = '#registrar';
    expect(Router()).toBe(registro());
  });

  it('Deberia retornar login si el hash es #login', () => {
    window.location.hash = '#login';
    expect(Router()).toBe(login());
  });

  it('Deberia retornar timeline si el hash es #timeline', () => {
    window.location.hash = '#timeline';
    expect(Router()).toBe(timeline());
  });

  it('Deberia retornar recuperar password si el hash es #recuperar', () => {
    window.location.hash = '#recuperar';
    expect(Router()).toBe(resetPassword());
  });

  it('Deberia retornar welcome si es hash es diferente al registrado', () => {
    window.location.hash = '#hola';
    expect(Router()).toBe(welcome());
  });
});

describe('exeEvents', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof exeEvents).toBe('function');
  });

  it('Deberia retornar una funcion con eventos', () => {
    expect(typeof exeEvents()).toBe('string');
  });
});
