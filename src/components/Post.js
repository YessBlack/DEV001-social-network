/* eslint-disable no-restricted-globals */
import { currentUserInfo } from '../lib/auth.js';
import { deletePost, getPost, updatePost } from '../lib/crud.js';
import { modalPost, eventsEditarPost } from './ModalPost.js';

export const Post = (post, id, idUserDB, imgProfile) => {
  const page = `<section class="container__post">
    <div class="header__post">
      <img id="foto-perfil" src="${imgProfile}">
      <p>${post.nameUser}</p>
    </div>

    <div class="prueba-img">
      <img src="${post.photoPost}" class="img__post">
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
  // Obtener todos los botones de like
  const btnsLike = document.querySelectorAll('.fa-heart');
  // Detectar cual botón se presionó
  btnsLike.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Obtener el id del post
      const id = e.target.id;
      // Se obtiene el post con el id
      getPost(id)
        .then((res) => {
          // Se obtiene el array de likes
          let likes = res.data().likes;
          // Si el arreglo esta vacio o si el usuario no se encuentra en el arreglo,
          // Se agrega el email del usuario actual al array de likes
          if (likes.length === 0) {
            likes.push(currentUserInfo().email);
          } else if (!likes.includes(currentUserInfo().email)) {
            likes.push(currentUserInfo().email);
          } else {
            // Si el usuario ya se encuentra en el arreglo, se elimina su email
            likes = likes.filter((email) => !email.includes(currentUserInfo().email));
          }
          // Se actualiza el post con el nuevo array de likes
          updatePost(id, { likes });
        });
    });
  });

  // Obtener todos los botones de eliminar
  const btnsEliminar = document.querySelectorAll('.fa-trash-can');
  // Detectar cual botón se presionó
  btnsEliminar.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.id;
      // eslint-disable-next-line no-restricted-globals
      // Confirmar si se desea eliminar el post
      if (confirm('¿Estás seguro que deseas eliminar tu post?') === true) {
        // Se elimina el post
        deletePost(id);
      }
    });
  });

  // Obtener todos los botones de editar
  const btnsEditar = document.querySelectorAll('.fa-pen-to-square');
  // Detectar cual botón se presionó
  btnsEditar.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.id;
      // Se muestra el modal con los datos del post a editar
      $('.modal').innerHTML = modalPost();
      eventsEditarPost(id);
    });
  });
};
