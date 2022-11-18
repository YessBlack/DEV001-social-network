import { loginUser, authenticationGoogle } from '../lib/auth.js';

export const login = () => {
  const pageLogin = `<section class="containerAuth container">    
    <section class="containerAuth__content">
      <h1 class="containerAuth__title-content">Inicia sesion</h1>
      <div class= "containerAuth__register-content">
        <form class="containerAuth__form-register" id="formLogin">
          <input class="containerAuth__email-form" placeholder="email" id="emailLogin" name="email">         
          <div class="ojo">
            <span id="eye" class="eye-registro"><i id="icon" class="fa-sharp fa-solid fa-eye-slash"></i></span>
          </div> 
          <input class="containerAuth__password-form " placeholder="Contraseña" id="passwordLogin" name="password" type="password">                    
          <button class="containerAuth__login-button login" id="login">Ingresar</button>
          <h3 class="lines-effect">OR</h3>          
        </form>
        <button id="loginGoogle" class="containerAuth__button-google">
          <img src="assets/img/google.png" alt="logo de google">
          Login con Google
        </button>
        <a href="#recuperar" class="containerAuth__register-link" id="prueba">¿Olvidaste tu contraseña?</a>
      </div>
      <div class="error"></div>
    </section>
    <div class="img-desktop">
    <img src="assets/img/background_principal__rec.jpg">
    </div>
  </section>`;
  return pageLogin;
};

export const eventsLogin = () => {
  const $ = (selector) => document.querySelector(selector);
  $('#eye').addEventListener('click', () => {
    if ($('.containerAuth__password-form').type === 'password') {
      $('.containerAuth__password-form').type = 'text';
      $('#icon').classList.remove('fa-eye-slash');
      $('#icon').classList.add('fa-eye');
    } else {
      $('.containerAuth__password-form').type = 'text';
      $('.containerAuth__password-form').type = 'password';
      $('#icon').classList.remove('fa-eye');
      $('#icon').classList.add('fa-eye-slash');
    }
  });

  $('#formLogin').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const promise = loginUser(data.email, data.password);
    promise.then(() => {
      window.location.hash = '#timeline';
    });
    promise.catch((error) => {
      console.log(error);
    });
  });

  $('#loginGoogle').addEventListener('click', () => {
    const promise = authenticationGoogle();
    promise.then(() => {
      window.location.hash = '#timeline';
    });
    promise.catch((error) => {
      console.log(error);
    });
  });

  $('#prueba').addEventListener('click', () => {
    window.location.hash = '#recuperar';
  });
};
