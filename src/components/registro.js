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
          <input class="containerAuth__password-form" placeholder="Contraseña" id="password" name="password" type="password">
          <input type="text" class="containerAuth__country-form" placeholder="País" id="country" name="country"><br>          
          <button class="containerAuth__login-button">Registar</button>
          <h3 class="lines-effect">OR</h3>
          </form>
          <button id="registerGoogle" class="containerAuth__button-google">
          <img src="assets/img/google.png" alt="logo de google">
          Inicia sesión con Google
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

const $ = (selector) => document.querySelector(selector);

export const eventRegistro = () => {
  const eventosRegistro = $('#registerGoogle').addEventListener('click', async () => {
    try {
      const promise = await authenticationGoogle();
      window.location.hash = '#timeline';
    } catch (error) {
      console.log('error');
    }
  });

  $('#eye-registro').addEventListener('click', () => {
    console.log("hi");
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
  $('#formRegister').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    try {
      const promise = await createUser(data.email, data.password);
      alert('Bienvenido');
      window.location.hash = '#login';
    } catch (error) {
      const errorCode = error.code;
      // eslint-disable-next-line no-unused-vars
      const errorMessage = error.message;
      $('.error').insertAdjacentHTML('beforeend', errorCode);
      setTimeout(() => {
        $('.error').innerHTML = '';
      }, 5000);
    }
  });
  return eventosRegistro;
};
