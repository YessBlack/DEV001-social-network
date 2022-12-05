import { loginUser, loginGoogle } from '../lib/auth.js';

export const login = () => {
  const pageLogin = `<section class="containerAuth container">    
    <section class="containerAuth__content">
      <h1 class="containerAuth__title-content">Inicia sesion</h1>
      <div class= "containerAuth__register-content">
        <form class="containerAuth__form-register" id="formLogin">
        <p class="inputs-vacios"></p>
          <input class="containerAuth__email-form" placeholder="email" id="emailLogin" name="email">         
          <p class="error-mail"></p>
          <div class="ojo">
            <span id="eye" class="eye-registro"><i id="icon" class="fa-sharp fa-solid fa-eye-slash"></i></span>
          </div> 
          <input class="containerAuth__password-form " placeholder="Contraseña" id="passwordLogin" name="password" type="password">                    
          <p class="error-password"></p>
          <button class="containerAuth__login-button login" id="login">Ingresar</button>
          <h3 class="lines-effect">OR</h3>          
        </form>
        <button id="loginGoogle" class="containerAuth__button-google">
          <img src="assets/img/google.png" alt="logo de google">
          Login con Google
        </button>
        <a href="#recuperar" class="containerAuth__register-link" id="prueba">¿Olvidaste tu contraseña?</a>
      </div>
      <p>¿No tienes cuenta? <a href="#registrar" class="containerAuth__register-link">Registrate</a></p>
    </section>
    <div class="img-desktop">
    <img src="assets/img/background_principal__rec.jpg">
    </div>
  </section>`;
  return pageLogin;
};

export const eventsLogin = () => {
  /* Ocultar y mostrar contraseña */
  const $ = (selector) => document.querySelector(selector);

  $('#eye').addEventListener('click', () => {
    if ($('.containerAuth__password-form').type === 'password') {
      $('.containerAuth__password-form').type = 'text';
      $('#icon').classList.remove('fa-eye-slash');
      $('#icon').classList.add('fa-eye');
    } else if ($('.containerAuth__password-form').type === 'text') {
      $('.containerAuth__password-form').type = 'password';
      $('#icon').classList.remove('fa-eye');
      $('#icon').classList.add('fa-eye-slash');
    }
  });
  /* Iniciar sesión con email y contraseña */
  $('#formLogin').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const promise = loginUser(data.email, data.password);
    if (data.email === '' || data.password === '') {
      $('.inputs-vacios').innerHTML = 'Todos los campos son obligatorios';
      $('#emailLogin').style.borderColor = 'red';
      $('#passwordLogin').style.borderColor = 'red';
    }
    promise.then(() => {
      window.location.hash = '#timeline';
    });
    promise.catch((error) => {
      console.log(error);
      const errorCode = error.code;
      if (errorCode.includes('auth/invalid-email')) {
        $('#emailLogin').style.borderColor = 'red';
        $('.error-mail').innerHTML = 'e-mail invalido';
        setTimeout(() => {
          $('.error-mail').innerHTML = '';
        }, 5000);
      }
      if (errorCode.includes('auth/wrong-password')) {
        $('#passwordLogin').style.borderColor = 'red';
        $('.error-password').innerHTML = 'Contraseña invalida';
        setTimeout(() => {
          $('.error-password').innerHTML = '';
        }, 5000);
      }
      if (errorCode.includes('auth/user-not-found')) {
        $('#emailLogin').style.borderColor = 'red';
        $('.error-mail').innerHTML = 'Usuario no creado';
        setTimeout(() => {
          $('.error-mail').innerHTML = '';
        }, 5000);
      }
    });
  });
  /* Iniciar sesión con google */
  $('#loginGoogle').addEventListener('click', () => {
    const promise = loginGoogle();
    promise.then(() => {
      //
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
