export const registro = () => {
  const pageRegistro = `<section class="login">
    <section class="login__container">
    <img src="assets/img/logo.svg" alt="logo" class="welcome__img-container"/>
      <div class= "login__datos-container">
        <input class=login__datos-set placeholder="email" id="email"></input> 
        <input class=login__datos-set placeholder="Contraseña" id="password"></input> 
      </div>
    <a href="#home" class="login-button" id="signin">Registar</a>
    </section>
  </section>`;
  return pageRegistro;
};
