import { currentUserInfo } from '../lib/auth.js';
import { deletePost, getPost, updatePost } from '../lib/crud.js';
import { modalPost, eventsEditarPost } from './ModalPost.js';

export const Post = (post, id, idUserDB, imgProfile, name, imgPost) => {
  const page = `<section class="container__post">
    <div class="header__post">
      <img id="foto-perfil" src="${imgProfile}">
      <p>${post.nameUser}</p>
    </div>

    <div class="prueba-img">
      <img src="${imgPost}" class="img__post">
    </div>

    <div class="review">
      <div class="informacion">
        <p class="producto">${post.producto}</p>
        <p>${post.pais}</p>
        <p>${post.ubicacion}</p>
      </div>
      <div class="stars">
        <p>${post.puntos} /10</p>
        <i class="fa-regular fa-star"></i>
    </div>

    </div>
    <div class="modal"></div>
    <div class="botones">
      <div class="btn-like">
        <i class="fa-regular fa-heart ${post.likes.includes(currentUserInfo().email) ? 'true' : 'false'}" id="${id}">
        </i>
      <div class="counter_like">${post.likes.length}</div>

        <div class="counter_like"></div>
      </div>
      <div class="editar-borrar">
      ${
  idUserDB === currentUserInfo().uid
    ? `<i class="fa-regular fa-pen-to-square ${idUserDB}" id="${id}"></i><i class="fa-solid fa-trash-can ${idUserDB}" id="${id}"></i>`
    : ''
}
      </div>
    </div>
  </section>`;
  return page;
};

export const eventsPost = () => {
  const $ = (selector) => document.querySelector(selector);

  const btnsLike = document.querySelectorAll('.fa-heart');
  btnsLike.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.id;
      getPost(id)
        .then((res) => {
          let likes = res.data().likes;
          if (likes.length === 0) {
            likes.push(currentUserInfo().email);
          } else if (!likes.includes(currentUserInfo().email)) {
            likes.push(currentUserInfo().email);
          } else {
            likes = likes.filter((email) => !email.includes(currentUserInfo().email));
          }
          updatePost(id, { likes });
        });
    });
  });

  const btnsEliminar = document.querySelectorAll('.fa-trash-can');
  btnsEliminar.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.id;

      // eslint-disable-next-line no-restricted-globals
      if (confirm('¿Estás seguro que deseas eliminar tu post?') === true) {
        deletePost(id);
      }
    });
  });

  const btnsEditar = document.querySelectorAll('.fa-pen-to-square');
  btnsEditar.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.id;
      $('.modal').innerHTML = modalPost();
      eventsEditarPost(id);
    });
  });
};
