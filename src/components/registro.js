import { AuthErrorCodes } from 'firebase/auth';
import { createUser, authenticationGoogle } from '../lib/auth.js';

export const registro = () => {
  const pageRegistro = `<section class="containerAuth container">   
    <section class="containerAuth__content">
      <h1 class="containerAuth__title-content">Registrate</h1>
      <div class= "containerAuth__register-content">
        <form class="containerAuth__form-register" id="formRegister">
          <input type="text" class="containerAuth__name-form" id="name" placeholder="name" name="name">
          <input class="containerAuth__email-form" placeholder="email" id="email" name="email">
          <div class="ojo">
            <span id="eye-registro" class="eye-registro"><i id="icon" class="fa-sharp fa-solid fa-eye-slash"></i></span>
          </div>          
          <input class="containerAuth__password-form " placeholder="Contraseña" id="password" name="password" type="password">
          <input type="text" class="containerAuth__country-form password-eye" placeholder="País" id="country" name="country"><br>          
          <button class="containerAuth__login-button">Registarse</button>
          <h3 class="lines-effect">OR</h3>          
        </form>
        <button id="registerGoogle" class="containerAuth__button-google">
          <img src="assets/img/google.png" alt="logo de google">
          Registrarse con Google
        </button>
      </div>    
        <div class="error"></div>  
    </section>
    <div class="img-desktop">
    <img src="assets/img/background_principal__rec.jpg">
  </div>
  </section>`;
  return pageRegistro;
};

export const eventsRegistro = () => {
  const $ = (selector) => document.querySelector(selector);

  $('#formRegister').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const promise = createUser(data.email, data.password);
    promise.then((res) => {
      console.log(res);
      window.location.hash = '#timeline';
    });
    promise.catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //  // $('.error').insertAdjacentHTML('beforeend', errorCode);
      if (errorMessage.includes('invalid - email')) {
        console.log('hello');
      }
    })
    });
  

  $('#registerGoogle').addEventListener('click', (e) => {
    e.preventDefault();
    const promise = authenticationGoogle();
    promise.then(() => {
      window.location.hash = '#timeline';
    });
    promise.catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      $('.error').insertAdjacentHTML('beforeend', errorCode);
      setTimeout(() => {
        $('.error').innerHTML = '';
      }, 5000);
    });
  });

  $('#eye-registro').addEventListener('click', () => {
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
};
