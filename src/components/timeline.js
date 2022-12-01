import { signOutUser, authState } from '../lib/auth.js';
import { modalPost } from './ModalPost.js';
import { capitalize } from '../lib/index.js';

export const timeline = () => {
  const pageTimeline = `<section class="timeline">
    <header class="header__timeline">
      <div class="header__logo">
        <span class="nombre-logo">Food Track</span>
      </div>
    </header>   
    <section class="timeline__container">
      <div class="create-post">
        <img id="foto-perfil-post">
        <button class="btn-create-post" id="btn-post">
          Comparte tu reseña 
          <i class="fa-solid fa-circle-plus"></i>
        </button>
      </div>
      <div class="modal"></div>
    </section>
    <nav class="menu-nav">
        <i class="fa-solid fa-house"></i>
        <!--<p id="nombre"></p>--> 
        <img id="foto-perfil">
        <i class="fa-solid fa-right-from-bracket" id="cerrar-sesion"></i>
      </nav> 
  </section>
  `;
  return pageTimeline;
};

export const eventsTimeLine = () => {
  const $ = (selector) => document.querySelector(selector);
  authState((user) => {
    if (user != null) {
      // $('#nombre').innerHTML = capitalize(user.displayName);
      $('#foto-perfil').src = user.photoURL;
      $('#foto-perfil-post').src = user.photoURL;
    }
  });
  $('#btn-post').addEventListener('click', () => {
    $('.modal').innerHTML = modalPost();
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
