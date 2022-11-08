const PATHS = {
    welcome: {
        path: "/",
        template:  `<section class="welcome">
        <section class="welcome__container">
         <img src="assets/img/logo.svg" alt="logo" class="welcome__img-container"/>
          <h1 class="weolcome__title-container">Bienvenidos a FoodTrack</h1>
          <p class="welcome__description-container">Con esta App podrás compartir tus comida favorita, hacer review, buscar y localizar platillos exquisitos en tu país</p>
          <div class="welcome__buttons-container">
          <a href="login" class="welcome__login-buttons">Iniciar Sesión</a>
          <a href="#" class="welcome__signIn-buttons">Registrarse</a>
        </div>
        </section>
      </section>`
    },
login:{
    path:'/login',
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
  </section>`
        },

signIn:{
    path:'/resgistro',
    }
}
class Router {
    //constructor
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }
    //Metodo para iniciar el router
    initRouter() {
        const { location: { pathname = "/" } } = window;
        const URL = pathname === "/" ? "welcome" : pathname.replace("/", "");
        this.load(URL);
    }
    //Metodo para cargar las vistas
    load(page = "welcome") {
        const { paths } = this;
        const { path, template } = paths[page] || paths.error;
        const $root = document.getElementById("root");
        $root.innerHTML = template;
        window.history.pushState({}, "done", path);
    }
}
const ROUTER = new Router(PATHS);  