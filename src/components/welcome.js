export const welcome = () => {
  const pageWelcome = `<section class="welcome">
  <div class="img-desktop">
  <img src="assets/img/background_Desktop1.png">
  </div>
  <section class="welcome__container">
      <img src="assets/img/logo.svg" alt="logo" class="container__logo-content">
    <h1 class="welcome__description-container">Bienvenidos a FoodTrack </h1>
    <p class="welcome__description-container">Con esta App podrás compartir tus comida favorita, hacer review, buscar y localizar platillos exquisitos en tu país</p>
    <div class="welcome__buttons-container">
      <a href="#/login" class="welcome__signIn-buttons">Iniciar Sesión</a>
      <a href="#/registrar" class="welcome__login-buttons">Registrarse</a>
    </div>
  </section>
</section>`;
  return pageWelcome;
};
