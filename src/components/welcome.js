export const welcome = () => {
  const pageWelcome = `<section class="container">
  <section class="container__content">
    <img src="assets/img/logo.svg" alt="logo" class="container__logo-content">
    <h1 class="container__title-content">Bienvenidos a FoodTrack </h1>
    <p class="container__welcome-content">Con esta App podrás compartir tus comida favorita, hacer review, buscar y localizar platillos exquisitos en tu país</p>
    <div class="container__buttons-content">
      <a href="#login" class="container__login-buttons">Iniciar Sesión</a>
      <a href="#registrar" class="container__signIn-buttons">Registrarse</a>
    </div>
  </section>
  <div class="img-desktop">
    <img src="assets/img/background_principal__rec.jpg">
  </div>
</section>`;
  return pageWelcome;
};
