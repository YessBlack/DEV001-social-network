import { authState, updateProfileUser, currentUserInfo } from '../lib/auth.js';
import { uploadTask, getDownloadIMG, storageRef } from '../lib/crud.js';

export const Perfil = () => {
  const page = `<section class="timeline">
  <header class="header__timeline">
    <div class="header__logo">
      <span class="nombre-logo">Food Track</span>
    </div>
  </header>   
  <section class="timeline__container">
  <section class="modal-container">
  <div class="title__modal">
    <h1 class="titulo">Editar Perfil</h1>
    <i class="fa-solid fa-circle-xmark" id="btn-cerrar-profile"></i>
  </div>
  <img src="" class="photo-user-profile">
  <p class="name-user"></p>
  <form class="create-publication" id="formPublication">
    <input type="text" required name="producto" class="input-name-user input-plubication" id="name-product" placeholder="Nombre del usuario"></input>
    <div class="modal-input-img">
      <input type="file" accept="image/png, .jpeg, .jpg, image/gif" id="input-file-photo"></input>
    </div>
    <button class="share-post update-profile" id="btn-share">Actualizar</button>
  </form>
  </section>
  </section>
  <nav class="menu-nav">
      <i class="fa-solid fa-house"></i>
      <!--<p id="nombre"></p>-->
      <img id="foto-perfil" src="">
      <i class="fa-solid fa-right-from-bracket" id="cerrar-sesion"></i>
    </nav> 
  </section>
  
  `;
  return page;
};

export const eventsPerfil = () => {
  const $ = (selector) => document.querySelector(selector);

  authState((user) => {
    if (user !== null) {
      $('.photo-user-profile').src = user.photoURL;
      $('.input-name-user').value = user.displayName;
      $('#foto-perfil').src = user.photoURL;
      $('.name-user').textContent = user.displayName;
    }
  });

  $('.fa-house').addEventListener('click', () => {
    window.location.hash = '#timeline';
  });

  $('.update-profile').addEventListener('click', (e) => {
    e.preventDefault();
    const name = $('.input-name-user').value;
    updateProfileUser(name, currentUserInfo().photoURL);
    $('.name-user').textContent = name;
  });

  $('#input-file-photo').addEventListener('change', () => {
    const name = $('.input-name-user').value;
    const path = $('#input-file-photo').files[0];
    uploadTask(storageRef(path, 'profiles'), path)
      .then((res) => {
        getDownloadIMG(res.ref.fullPath)
          .then((url) => {
            $('.photo-user-profile').src = url;
            updateProfileUser(name, url);
            $('.name-user').textContent = name;
          });
      });
  });

  $('#btn-cerrar-profile').addEventListener('click', () => {
    window.location.hash = '#timeline';
  });
};
