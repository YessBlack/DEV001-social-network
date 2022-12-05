import { Router, exeEvents } from '../src/components/Router.js';

jest.mock('../src/components/Router.js');

const $ = (selector) => document.querySelector(selector);

describe('Router', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('Deberia ser una funcion', () => {
    expect(typeof Router).toBe('function');
  });

  it('Deberia ser llamado', () => {
    window.location.hash = '#/';
    Router();
    expect(Router).toHaveBeenCalled();
  });

  it('Deberia retornar welcome si el hash es #/', () => {
    window.location.hash = '#/';
    $('#root').innerHTML = Router();
    expect($('#root').innerHTML).toBe('<h1>welcome</h1>');
  });

  it('Deberia retornar registro si el hash es #registrar', () => {
    window.location.hash = '#registrar';
    $('#root').innerHTML = Router();
    expect($('#root').innerHTML).toBe('<h1>registro</h1>');
  });

  it('Deberia retornar login si el hash es #login', () => {
    window.location.hash = '#login';
    $('#root').innerHTML = Router();
    expect($('#root').innerHTML).toBe('<h1>login</h1>');
  });

  it('Deberia retornar timeline si el hash es #timeline', () => {
    window.location.hash = '#timeline';
    $('#root').innerHTML = Router();
    expect($('#root').innerHTML).toBe('<h1>timeline</h1>');
  });

  it('Deberia retornar recuperar password si el hash es #recuperar', () => {
    window.location.hash = '#recuperar';
    $('#root').innerHTML = Router();
    expect($('#root').innerHTML).toBe('<h1>resetPassword</h1>');
  });

  it('Deberia retornar welcome si es hash es diferente al registrado', () => {
    window.location.hash = '#hola';
    $('#root').innerHTML = Router();
    expect($('#root').innerHTML).toBe('<h1>welcome</h1>');
  });
});

describe('exeEvents', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('Deberia ser una funcion', () => {
    expect(typeof exeEvents).toBe('function');
  });

  it('Deberia ser llamado y ejecutar su comportamiento', () => {
    window.location.hash = '#registrar';
    $('#root').innerHTML = Router();
    exeEvents();
    expect(exeEvents).toHaveBeenCalled();
    expect($('#root').innerHTML).toBe('<h1>mock router</h1>');
  });

  it('Deberia retornar "Hola" si la ruta es diferente a la registrada', () => {
    window.location.hash = '#hola';
    $('#root').innerHTML = Router();
    expect(exeEvents()).toBe('Hola');
  });
});
