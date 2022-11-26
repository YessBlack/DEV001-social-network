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
  return welcome();
};

export const exeEvents = () => {
  // eslint-disable-next-line no-restricted-globals
  const hash = location.hash;
  if (hash === '#registrar') {
    return eventsRegistro();
  }
  if (hash === '#login') {
    return eventsLogin();
  }
  if (hash === '#timeline') {
    return eventsTimeLine();
  }
  if (hash === '#recuperar') {
    return eventsResetPassword();
  }
  return welcome();
};
