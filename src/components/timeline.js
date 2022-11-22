import { signOutUser } from '../lib/auth.js';

export const timeline = () => {
  const pageTimeline = `<h1>Hola Mundo</h1>
    <a href="#login" id="signOut">Cerrar Sesion</a>
  `;
  return pageTimeline;
};

export const eventsTimeLine = () => {
  const $ = (selector) => document.querySelector(selector);
  $('#signOut').addEventListener('click', (e) => {
    e.preventDefault();
    const promise = signOutUser();
    console.log(promise);
    promise.then(() => {
      alert('Sesion cerrada');
      window.location.hash = '#login';
    });
    promise.catch(console.error());
  });
};
