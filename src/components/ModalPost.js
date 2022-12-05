import { addPost } from '../lib/crud';

export const modalPost = () => {
  const modal = `<section class="modal-container">
    <div class="title__modal">
      <h1 >Crear Publicación</h1>
      <i class="fa-solid fa-circle-xmark" id="btn-cerrar-modal"></i>
    </div>
    <form class="create-publication" id="formPublication">
      <input type="text" name="producto" class="input-plubication" id="name-product" placeholder="Nombre del producto"></input>
      <input type="text" name="ubicacion" class="input-plubication" id="country-product" placeholder="lugar/Ubicación"></input>
      <input type="text" name="puntos" class="input-plubication" id="point-product" placeholder="Puntuacion 0/10"></input>
      <!--
      <div class="modal-input-img">
        <input type="file" class="input-img"><i class="fa-solid fa-image"></i></input>
      </div>
      -->
      <button class="share-post" id="btn-share">Compartir</button>
    </form>
    </section>`;
  return modal;
};

export const eventsModalPost = () => {
  const $ = (selector) => document.querySelector(selector);

  $('#btn-cerrar-modal').addEventListener('click', () => {
    $('.modal').innerHTML = '';
  });

  $('#formPublication').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    addPost(data)
      .then(() => {
        $('.modal').innerHTML = '';
      });
  });
};
