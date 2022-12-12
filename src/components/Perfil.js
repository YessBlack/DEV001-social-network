export const perfil = () => {
  const perfil = `<section class = "container_profile">
  <div> "hola"</div>
  <input type="file" id="photo-profile"></input>
  <i class="fa-solid fa-house"></i>
  </section>
  `;
  return perfil;
};

export const eventsPerfil = () => {
  const $ = (selector) => document.querySelector(selector);
  $('.fa-house').addEventListener('click', () => {
    window.location.hash = '#timeline';
  });
};
