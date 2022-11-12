import { welcome } from './components/welcome.js';
import { login } from './components/login.js';
import { registro } from './components/registro.js';

const PATHS = {
  home: {
    path: '/',
    template: welcome(),
  },
  login: {
    path: '#/login',
    template: login(),
  },

  registro: {
    path: '#/registro',
    template: registro(),
  },
};
class Router {
  constructor(paths) {
    this.paths = paths;
    this.initRouter();
  }

  initRouter() {
    const { location: { pathname = '/' } } = window;
    const URL = pathname === '/' ? 'home' : pathname.replace('/', '');
    this.load(URL);
  }

  load(page = 'home') {
    const { paths } = this;
    const { path, template } = paths[page] || paths.error;
    const $root = document.getElementById('root');
    $root.innerHTML = template;
    window.history.pushState({}, 'done', path);
  }
}

/*eslint-disable */ 
export const ROUTER = new Router(PATHS);

window.addEventListener('hashchange', function(e){
  e.preventDefault
  console.log("el evento ", e);
  console.log(window.history);
  const newPage = e.newURL.split("#")[1]
  ROUTER.load(newPage) //window.history.pushState({}, null, myOldUrl);
});
