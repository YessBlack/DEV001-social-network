import { currentUserInfo } from '../lib/auth.js';
import { deletePost } from '../lib/crud.js';
import { modalPost, eventsEditarPost } from './ModalPost.js';

export const Post = (post, id, idUserDB) => {
  const page = `<section class="container__post">
    <p>${post.producto}</p>
    <p>${post.pais}</p>
    <p>${post.ubicacion}</p>
    <p>${post.puntos} /10</p>
    <div class="modal"></div>
    ${
  idUserDB === currentUserInfo().uid
    ? `<i class="fa-solid fa-trash-can ${idUserDB}" id="${id}"></i><i class="fa-regular fa-pen-to-square ${idUserDB}" id="${id}"></i>`
    : ''
}
  </section>`;
  return page;
};

export const eventsPost = () => {
  const $ = (selector) => document.querySelector(selector);

  const btnsEliminar = document.querySelectorAll('.fa-trash-can');
  btnsEliminar.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.id;
      deletePost(id);
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
