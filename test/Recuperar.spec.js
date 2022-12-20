import { resetPassword, eventsResetPassword } from '../src/components/Recuperar.js';
import { resetPasswordEmail } from '../src/lib/auth.js';

jest.mock('../src/lib/auth.js');

describe('resetPassword', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof resetPassword).toBe('function');
  });

  it('Deberia retornar un string', () => {
    expect(typeof resetPassword()).toBe('string');
  });
});

describe('eventsResetPassword', () => {
  const $ = (selector) => document.querySelector(selector);
  beforeEach(() => {
    document.body.innerHTML = resetPassword();
    eventsResetPassword();
  });

  it('Deberia ser una funcion', () => {
    expect(typeof eventsResetPassword).toBe('function');
  });

  it('Deberia disparar un evento submit para enviar un email', (done) => {
    resetPasswordEmail.mockImplementationOnce(() => Promise.resolve({}));
    $('#formResetPassword').dispatchEvent(new Event('submit'));
    setTimeout(() => {
      expect(window.location.hash).toBe('#login');
      done();
    }, 1000);
  });
});
