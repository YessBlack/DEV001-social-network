import { resetPasswordEmail } from '../lib/auth.js';

export const resetPassword = () => {
  const pageResetPassword = `<section class="containerAuth container">    
    <section class="containerAuth__content">
      <h1 class="containerAuth__title-content">Recupera tu contraseña</h1>
      <div class= "containerAuth__register-content">
        <i class="fa-solid fa-user-lock icon-reset-pass"></i>
        <form class="containerAuth__form-register" id="formResetPassword">
          <input class="containerAuth__email-form" placeholder="email" id="emailResetPassword" name="email" type="email">                 
          <button class="containerAuth__login-button login" id="resetPassword">Enviar enlace de inicio de sesion</button>
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

export const eventsResetPassword = () => {
  const $ = (selector) => document.querySelector(selector);
  $('#formResetPassword').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const promise = resetPasswordEmail(data.email);
    console.log(promise);
    promise.then(() => {
      alert('email enviado');
    });
    promise.catch(console.error());
  });
};
