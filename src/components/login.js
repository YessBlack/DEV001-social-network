export const login = () => {
  const pageLogin = `
  <section class="login">
  <div class = 'img-desktop'>
  <img src= "assets/img/background_Desktop1.png">
  </div>
    <section class="login__container">
      <img src="assets/img/logo.svg" alt="logo" class="welcome__img-container"/>
      <div class= "login__datos-container">
      <input class=login__datos-set placeholder="email" id="emailLogin"></input> 
    <input class=login__datos-set placeholder="Contraseña" id="passwordLogin"></input> 
    </div>
    <a class="login-button"  id="login" >Iniciar Sesión</a>
    <a href='#/' class="welcome-button" id="welcom">Home</a>
      <div class ="prueba"></div> 
    </section>
    </section>`;
  return pageLogin;
};
