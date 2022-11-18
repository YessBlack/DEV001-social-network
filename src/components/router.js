import { welcome } from './welcome.js';
import { login, eventLogin } from './login.js';
import { registro, eventRegistro } from './registro.js';
import { timeline, hi} from './timeline.js';
import { resetPassword, eventresetPassword} from './resetpassword.js';

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

export const eventsTemplate = () => {
  /* Eventos del template */
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#registrar') {
      eventRegistro();
    }
    if (window.location.hash === '#login') {
      eventLogin();
    }
    if (window.location.hash === '#recuperar') {
      eventresetPassword();
    }
    if (window.location.hash === '#timeline') {
      hi();
    }
  });
};
/*

class Router {
  // constructor
  constructor(paths) {
    this.paths = paths;
    this.initRouter();
  }

  // Metodo para iniciar el router
  initRouter() {
    const { location: { pathname = '/' } } = window;
    const URL = pathname === '/' ? 'home' : pathname.replace('/', '');
    this.load(URL);
  }

  // Metodo para cargar las vistas
  load(page = 'home') {
    const { paths } = this;
    const { path, template } = paths[page] || paths.error;
    const $root = document.getElementById('root');
    $root.innerHTML = template;
    window.history.pushState({}, 'done', path);
  }
}
const ROUTER = new Router(PATHS);
console.log(ROUTER);

window.addEventListener('hashchange', (e) => {
  console.log('el evento ', e);
  console.log(window.history);
  const newPage = e.newURL.split('#')[1];
  ROUTER.load(newPage); // window.history.pushState({}, null, myOldUrl);
});

export default ROUTER;
*/
