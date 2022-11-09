const PATHS = {
  welcome: {
    path: '/',
    template: `<section class="welcome">
        <section class="welcome__container">
         <img src="assets/img/logo.svg" alt="logo" class="welcome__img-container"/>
          <h1 class="weolcome__title-container">Bienvenidos a FoodTrack</h1>
          <p class="welcome__description-container">Con esta App podrás compartir tus comida favorita, hacer review, buscar y localizar platillos exquisitos en tu país</p>
          <div class="welcome__buttons-container">
          <a href="login" class="welcome__login-buttons">Iniciar Sesión</a>
          <a href="signin" class="welcome__signIn-buttons" onclick="ROUTER.load('signin')">Registrarse</a>
        </div>
        </section>
      </section>
      `,
  },
  signin: {
    path: '/signin',
    template:
        `<section class="login">
            <section class="login__container">
                <img src="assets/img/logo.svg" alt="logo" class="welcome__img-container"/>
                <div class= "login__datos-container">
                    <input class=login__datos-set placeholder="Nombre"></input>
                    <input class=login__datos-set placeholder="e-mail."></input> 
                    <input class=login__datos-set placeholder="Contraseña"></input> 
                    <input class=login__datos-set placeholder="País"></input>     
                </div>
                <a href="#" class="login-button">Iniciar Sesión</a>
            </section>
        </section>`,
  },
};
class Router {
  constructor(paths) {
    this.paths = paths;
    this.initRouter();
  }

  initRouter() {
    const { location: { pathname = '/' } } = window;
    const URL = pathname === '/' ? 'welcome' : pathname.replace('/', '');
    this.load(URL);
  }

  load(page = 'welcome') {
    const { paths } = this;
    const { path, template } = paths[page] || paths.error;
    const $root = document.getElementById('root');
    $root.innerHTML = template;
    window.history.pushState({}, 'done', path);
  }
}

/*eslint-disable */ 
const ROUTER = new Router(PATHS);