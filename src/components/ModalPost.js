export const modalPost = () => {
  const modal = `<section class="modal-container">
    <h1 >Crear Publicación <i class="fa-solid fa-circle-xmark"></i></h1>
    <form class="create-publication">
    <input type="text" class="input-plubication" placeholder="Nombre del producto"></input>
    <input type="text" class="input-plubication" placeholder="lugar/Ubicación"></input>
    <input type="text" class="input-plubication" placeholder="Puntuacion 0/10"></input>
    <div class="modal-input-img">
    <input type="file" class="input-img"><i class="fa-solid fa-image"></i>
    </input>
    </div>
    <button class="share-post">Compartir</button>
    </form>
    </section>`;
  return modal;
};
