import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './lib/config';
import { Router } from './router.js';

const $ = (selector) => document.querySelector(selector);

// Mostrar las páginas

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
    /* Mostrar Contraseña */
    $('#eye').addEventListener('click', () => {
      if ($('.containerAuth__password-form').type === 'password') {
        $('.containerAuth__password-form').type = 'text';
        $('#icon').classList.remove('fa-eye-slash');
        $('#icon').classList.add('fa-eye');
      } else {
        $('.containerAuth__password-form').type === 'text';
        $('.containerAuth__password-form').type = 'password';
        $('#icon').classList.remove('fa-eye');
        $('#icon').classList.add('fa-eye-slash');
      }
    });

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
      promise.catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        $('.error').insertAdjacentHTML('beforeend', errorCode);
        $('.error').style.display = 'block';
      });
    });
  }

  if (window.location.hash === '#registrar') {
    $('#eye-registro').addEventListener('click', () => {
      if ($('.containerAuth__password-form').type === 'password') {
        $('.containerAuth__password-form').type = 'text';
        $('#icon').classList.remove('fa-eye-slash');
        $('#icon').classList.add('fa-eye');
      } else {
        $('.containerAuth__password-form').type === 'text';
        $('.containerAuth__password-form').type = 'password';
        $('#icon').classList.remove('fa-eye');
        $('#icon').classList.add('fa-eye-slash');
      }
    });
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
      promise.catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code.includes('auth/invalid-email')) {
          $('.containerAuth__email-form').style.borderColor = 'red';
          $('.containerAuth__email-form').style.borderWidth = '2px';
        }
        if (error.code.includes('auth/internal-error')) {
          $('.containerAuth__password-form').style.borderColor = 'red';
          $('.containerAuth__password-form').style.borderWidth = '2px';
        }
      });
    });
  }
});
