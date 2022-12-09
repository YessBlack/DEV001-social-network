import { currentUserInfo } from '../lib/auth.js';
import { deletePost } from '../lib/crud.js';
import { modalPost, eventsEditarPost } from './ModalPost.js';

export const Post = (post, id, idUserDB, imgProfile, name, imgPost) => {
  const page = `<section class="container__post">
    <div class="header__post">
      <img id="foto-perfil" src="${imgProfile}">
      <p>${name}</p>
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
        <i class="fa-regular fa-heart"></i>
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
    let counterLikes = 0;
    btn.addEventListener('click', () => {
      if (btn.style.color === '') {
        btn.style.color = 'red';
        btn.style.fontWeight = 'bolder';
        counterLikes += 1;
        btn.nextElementSibling.innerHTML = counterLikes;
      } else if (btn.style.color === 'red') {
        btn.style.color = '';
        btn.style.fontWeight = 'lighter';
        counterLikes -= 1;
        btn.nextElementSibling.innerHTML = counterLikes;
      }
      if (counterLikes === 0) {
        btn.nextElementSibling.innerHTML = '';
      } else {
        btn.nextElementSibling.innerHTML = `${counterLikes}`;
      }
    });
  });

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
