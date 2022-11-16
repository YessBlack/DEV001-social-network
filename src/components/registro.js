export const registro = () => {
  const pageRegistro = `<section class="containerAuth container">
    <div class="img-desktop">
      <img src="assets/img/background_Desktop1.png">
    </div>
    <section class="containerAuth__content">
      <h1 class="containerAuth__title-content">Registrate</h1>
      <div class= "containerAuth__register-content">
        <form class="containerAuth__form-register" id="formRegister">
          <input type="text" class="containerAuth__name-form" id="name" placeholder="name" name="name">
          <input class="containerAuth__email-form" placeholder="email" id="email" name="email">
          <span id="eye-registro"><i id="icon" class="fa-sharp fa-solid fa-eye-slash"></i></span>
          <input class="containerAuth__password-form" placeholder="Contraseña" id="password" name="password" type="password">
          <input type="text" class="containerAuth__country-form" placeholder="País" id="country" name="country"><br>
          <h3 class="lines-effect">OR</h3>
          <a href="#" id="registerGoogle" class="containerAuth__button-google">
            <img src="assets/img/google.png" alt="logo de google">
            Registrarse con Google
          </a>
          <button class="containerAuth__login-button">Registar</button>
        </form>
      </div>
      </section>
  </section>`;
  return pageRegistro;
};
