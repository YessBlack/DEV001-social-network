import { welcome } from './welcome.js';
import { login } from './login.js';
import { registro } from './registro.js';
import { timeline } from './timeline.js';

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
  return alert('Error 404');
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
