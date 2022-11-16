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
          <a href="#" id="registerGoogle" class="containerAuth__button-google">
            <img src="assets/img/google.png" alt="logo de google">
            Registrarse con Google
          </a>
        </form>
      </div>
      <div class="error"></div>
    </section>
    <div class="img-desktop">
    <img src="assets/img/background_principal__rec.jpg">
  </div>
  </section>`;
  return pageRegistro;
};
