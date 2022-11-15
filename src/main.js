import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './lib/config';
import { Router } from './router.js';

const $ = (selector) => document.querySelector(selector);

const render = () => {
  $('#root').innerHTML = Router();
};

window.onpopstate = () => {
  $('#root').innerHTML = '';
  $('#root').innerHTML = Router();
};

window.addEventListener('DOMContentLoaded', render);
window.addEventListener('hashchange', Router);
/* Eventos del template */
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#login') {
    $('#formLogin').addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      const auth = getAuth();
      const promise = signInWithEmailAndPassword(auth, data.email, data.password);
      promise.then(() => {
        alert('Bienvenido');
        window.location.hash = '#timeline';
      });
      promise.catch((err) => console.log(err.message));
    });
  }

  if (window.location.hash === '#registrar') {
    $('#formRegister').addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      console.log(data);
      const auth = getAuth();
      const promise = createUserWithEmailAndPassword(auth, data.email, data.password);
      promise.then(() => {
        alert('Bienvenido');
        window.location.hash = '#login';
      });
      promise.catch((err) => console.log(err.message));
    });
  }
});
