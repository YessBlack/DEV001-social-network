import { signOutUser, authState, currentUserInfo } from '../lib/auth.js';
import { onGetPost } from '../lib/crud.js';
import { modalPost, eventsModalPost } from './ModalPost.js';
import { Post, eventsPost } from './Post.js';

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
    <div class="posts"></div>
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
  // Escuchando cambios en la BD para mostrar los post
  onGetPost((res) => {
    // en posts se guardan los post en formato html
    let posts = '';
    // en arr se guardan los post para luego ordenarlos
    const arr = [];
    // recorriendo los post de la BD
    res.forEach((doc) => {
      const post = doc.data();
      // Datos del post para mostrarlos
      post.id = doc.id;
      post.idUserDB = doc.data().idUser;
      post.photoUser = doc.data().photoUser;
      post.nameUser = doc.data().nameUser;
      post.photoPost = doc.data().urlPhotoPost;
      post.likes = doc.data().likes;
      post.like = post.likes.forEach((email) => (currentUserInfo().email === email));
      arr.push(post);
    });
    // ordenando los post de la BD del mas reciente al mas antiguo
    arr.sort((a, b) => b.fecha - a.fecha);
    // recorriendo el arreglo de post para mostrarlos
    arr.forEach((post) => {
      // Guardar todos los post en formato html
      posts += Post(
        post,
        post.id,
        post.idUserDB,
        post.photoUser,
        post.nameUser,
        post.photoPost,
        post.likes,
        post.like,
      );
    });
    // Limpiar post existentes
    $('.posts').innerHTML = '';
    // Mostrar post
    $('.posts').insertAdjacentHTML('beforeend', posts);
    eventsPost();
  });

  // Obtener informacion del usuario actual logueado
  authState((user) => {
    if (user !== null) {
      const fotoUsuario = user.photoURL;
      $('#foto-perfil-post').src = fotoUsuario;
      $('#foto-perfil-post').referrerpolicy = 'no-referrer';
      $('#foto-perfil').src = fotoUsuario;
      $('#foto-perfil').referrerpolicy = 'no-referrer';
    }
  });

  // Añadir post
  $('#btn-post').addEventListener('click', () => {
    $('.modal').innerHTML = modalPost();
    eventsModalPost();
  });

  // Cambiar a vista Editar Perfil
  $('#foto-perfil').addEventListener('click', () => {
    window.location.hash = '#perfil';
  });

  // Cambiar a vista Inicio
  $('.fa-house').addEventListener('click', () => {
    window.scrollTo(0, 0);
  });

  // Cerrar sesion
  $('#cerrar-sesion').addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser()
      .then(() => {
        window.location.hash = '#login';
        window.location.reload();
      });
  });
};
