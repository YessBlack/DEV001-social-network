export const welcome = () => {
  const pageWelcome = `<section class="container">
  <section class="container__content">
    <img src="https://firebasestorage.googleapis.com/v0/b/foodtrack-6348d.appspot.com/o/assets%2Flogo.svg?alt=media&token=9cda6baa-5ba7-441f-9ccf-b29ed42834b8" class="container__logo-content">
    <h1 class="container__title-content">Bienvenidos a FoodTrack </h1>
    <p class="container__welcome-content">Con esta App podrás compartir tus comida favorita, hacer review, buscar y localizar platillos exquisitos en tu país</p>
    <div class="container__buttons-content">
      <a href="#login" class="container__login-buttons" id="login">Iniciar Sesión</a>
      <a href="#registrar" class="container__signIn-buttons" id="register">Registrarse</a>
    </div>
  </section>
  <div class="img-desktop">
    <img src="/assets/img/background_principal__rec.jpg">
  </div>
</section>`;
  return pageWelcome;
};
