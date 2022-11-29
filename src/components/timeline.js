import { signOutUser, authState } from '../lib/auth.js';
import { capitalize } from '../lib/index.js';

export const timeline = () => {
  const pageTimeline = `<section class="timeline">
    <section class="content__timeline">  
      <header class="header__timeline">
        <div class="header__logo">
          <img src="../assets/img/logo.svg" alt="logo de la pagina">
        </div>
        <div class="header__menu">
          <div class="header__menu--profile">
            <i class="fa-solid fa-house"></i>            
          </div>
        </div>
        <div class="info-usuario">
          <p id="nombre"></p>
          <img id="foto-perfil">
          <i id="cerrar-sesion" class="fa-solid fa-right-from-bracket"></i>
        </div>
      </header>
    </section>
  </section>`;
  return pageTimeline;
};

export const eventsTimeLine = () => {
  const $ = (selector) => document.querySelector(selector);
  authState((user) => {
    if (user != null) {
      $('#nombre').innerHTML = capitalize(user.displayName);
      $('#foto-perfil').src = user.photoURL;
    }
  });

  $('#cerrar-sesion').addEventListener('click', (e) => {
    e.preventDefault();
    const promise = signOutUser();
    promise.then(() => {
      window.location.hash = '#login';
    });
    promise.catch(console.error());
  });
};
