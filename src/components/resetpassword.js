import { resetContraseña } from '../lib/auth.js';

export const resetPassword = () => {
  const pageResetPassword = `<section class="containerAuth container">    
      <section class="containerAuth__content">
        <h1 class="containerAuth__title-content">Recupera tu contraseña</h1>
        <div class= "containerAuth__register-content">
        <i class="fa-solid fa-user-lock" id="lock"></i>
          <form class="containerAuth__form-register" id="formResetPassword">
            <input class="containerAuth__email-form" placeholder="email" id="emailRestPasword" name="email">                 
            <button class="containerAuth__login-button login" id="password">Enviar enlace de inicio de sesion</button>
          </form>        
        </div>
        <div class="error"></div>
      </section>
      <div class="img-desktop">
      <img src="assets/img/background_principal__rec.jpg">
      </div>
    </section>`;
  return pageResetPassword;
};
const $ = (selector) => document.querySelector(selector);

export const eventresetPassword = () => {
  const prueba = $('#password').addEventListener('click', (e) => {
    e.preventDefault();
    const email = $('#emailRestPasword').value;
    const promise = resetContraseña(email);
    promise.then(() => {
      alert('mail enviado');
    });
    promise.catch((error) => {
      console.log('buu');
      const errorCode = error.code;
      // eslint-disable-next-line no-unused-vars
      const errorMessage = error.message;
    });
  });
  return prueba;
};
