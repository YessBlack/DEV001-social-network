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
        <img id="foto-perfil-post" src="">
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
        <img id="foto-perfil" src="">
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
      console.log('Inicio', user);
      // $('#nombre').innerHTML = capitalize(user.displayName);
      $('#foto-perfil').setAttribute('src', user.photoURL);
      $('#foto-perfil-post').setAttribute('src', user.photoURL);
    }
  });
  $('#btn-post').addEventListener('click', () => {
    $('.modal').innerHTML = modalPost();
    $('#btn-share').addEventListener('click', (e) => {
      e.preventDefault();
      $('#name-product');
    });
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
