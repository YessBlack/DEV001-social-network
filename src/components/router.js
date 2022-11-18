import { welcome } from './Welcome.js';
import { login, eventsLogin } from './Login.js';
import { registro, eventsRegistro } from './Registro.js';
import { eventsTimeLine, timeline } from './Timeline.js';
import { eventsResetPassword, resetPassword } from './Recuperar.js';

export const Router = () => {
  // eslint-disable-next-line no-restricted-globals
  const hash = location.hash;
  if (!hash || hash === '#/') {
    return welcome();
  }
  if (hash === '#registrar') {
    return registro();
  }
  if (hash === '#login') {
    return login();
  }
  if (hash === '#timeline') {
    return timeline();
  }
  if (hash === '#recuperar') {
    return resetPassword();
  }
  return alert('Error 404');
};

export const exeEvents = () => {
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#login') {
      eventsLogin();
    }
    if (window.location.hash === '#registrar') {
      eventsRegistro();
    }
    if (window.location.hash === '#recuperar') {
      eventsResetPassword();
    }
    if (window.location.hash === '#timeline') {
      eventsTimeLine();
    }
  });
};
