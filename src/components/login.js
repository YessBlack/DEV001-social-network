export const login = () => {
  const pageLogin = `<section class="containerAuth container">    
    <section class="containerAuth__content">
      <h1 class="containerAuth__title-content">Inicia sesion</h1>
      <div class= "containerAuth__register-content">
        <form class="containerAuth__form-register" id="formLogin">
          <input class="containerAuth__email-form" placeholder="email" id="emailLogin" name="email">
          <div class="ojo">
          <span id="eye" class="eye"><i id="icon" class="fa-sharp fa-solid fa-eye-slash"></i></span>
          </div>
          <input class="containerAuth__password-form" placeholder="Contraseña" id="passwordLogin" name="password" type="password">          
          <button class="containerAuth__login-button login" id="login">Ingresar</button>
          <h3 class="lines-effect">OR</h3>
          <button id="loginGoogle" class="containerAuth__button-google">
            <img src="assets/img/google.png" alt="logo de google">
            Inicia sesión con Google
          </button>
        </form>
      </div>
      <div class="error"></div>
    </section>
    <div class="img-desktop">
    <img src="assets/img/background_principal__rec.jpg">
    </div>
  </section>`;
  return pageLogin;
};
