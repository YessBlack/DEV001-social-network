import { currentUserInfo } from '../lib/auth.js';
import {
  addPost, getPost, updatePost, uploadTask, storageRef, getDownloadIMG,
} from '../lib/crud.js';

export const modalPost = () => {
  const modal = `<section class="modal-container">
    <div class="title__modal">
      <h1 class="titulo">Crear Publicación</h1>
      <i class="fa-solid fa-circle-xmark" id="btn-cerrar-modal"></i>
    </div>
    <form class="create-publication" id="formPublication">
      <input type="text" required name="producto" class="input-plubication" id="name-product" placeholder="Nombre del producto"></input>
      <input type="text" required name="pais" class="input-plubication" id="country-product" placeholder="País"></input>
      <input type="text" required name="ubicacion" class="input-plubication" id="here-product" placeholder="Lugar/Ubicación"></input>
      <input type="text" required name="puntos" class="input-plubication" id="point-product" placeholder="Puntuación 0/10"></input>
      <div class="modal-input-img">
        <input type="file" accept="image/png, .jpeg, .jpg, image/gif" id="input-file-photo"></input>
      </div>
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

  $('#input-file-photo').addEventListener('change', () => {
    const path = $('#input-file-photo').files[0];
    $('#formPublication').addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      data.fecha = Number(new Date());
      data.idUser = currentUserInfo().uid;
      data.photoUser = currentUserInfo().photoURL;
      data.nameUser = currentUserInfo().displayName;
      data.likes = [];
      // data.likes = ['carloscorreo','nataliacorreo','angelicacorreo'];
      uploadTask(storageRef(path, 'images'), path)
        .then((res) => {
          getDownloadIMG(res.ref.fullPath)
            .then((url) => {
              data.urlPhotoPost = url;
              addPost(data)
                .then(() => {
                  $('.modal').innerHTML = '';
                });
            });
        });
    });
  });
};

export const eventsEditarPost = (id) => {
  const $ = (selector) => document.querySelector(selector);
  $('.titulo').innerHTML = 'Editar Publicacion';
  getPost(id)
    .then((res) => {
      $('#name-product').value = res.data().producto;
      $('#country-product').value = res.data().pais;
      $('#here-product').value = res.data().ubicacion;
      $('#point-product').value = res.data().puntos;
    });

  $('#input-file-photo').addEventListener('change', () => {
    $('#formPublication').addEventListener('submit', (e) => {
      const data = Object.fromEntries(new FormData(e.target));
      const path = $('#input-file-photo').files[0];
      uploadTask(storageRef(path, 'images'), path)
        .then((res) => {
          getDownloadIMG(res.ref.fullPath)
            .then((url) => {
              data.urlPhotoPost = url;
              updatePost(id, data)
                .then(() => {
                  $('.modal').innerHTML = '';
                });
            });
        });
    });
  });

  $('#formPublication').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    updatePost(id, data)
      .then(() => {
        $('.modal').innerHTML = '';
      });
  });

  $('#btn-cerrar-modal').addEventListener('click', () => {
    $('.modal').innerHTML = '';
  });
};
