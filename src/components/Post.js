export const Post = (post) => {
  const page = `<section class="container__post">
    <p>${post.producto}</p>
    <p>${post.pais}</p>
    <p>${post.ubicacion}</p>
    <p>${post.puntos} /10</p>
  </section>`;
  return page;
};
