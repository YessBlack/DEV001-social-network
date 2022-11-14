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
  if (window.location.hash === '#/login') {
    $('#login').addEventListener('click', (e) => {
      e.preventDefault();
      const emailLogin = $('#emailLogin').value;
      const passwordLogin = $('#passwordLogin').value;
      console.log(email);
      const auth = getAuth();
      const promise = signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
      promise.then(() => {
        alert('Bienvenido');
      });
      promise.catch((err) => console.log(err.message));
    });
  }

  if (window.location.hash === '#/registrar') {
    $('#registro').addEventListener('click', () => {
      const email = $('#email').value;
      const password = $('#password').value;
      const auth = getAuth();
      const promise = createUserWithEmailAndPassword(auth, email, password);
      promise.catch((e) => console.log(e.message));
    });
  }
});
