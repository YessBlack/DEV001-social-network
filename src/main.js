import { Router } from './components/router.js';
import { createUser, loginUser } from './lib/auth.js';

const $ = (selector) => document.querySelector(selector);

const render = () => {
  $('#root').innerHTML = Router();
};

window.onpopstate = () => {
  $('#root').innerHTML = '';
  $('#root').innerHTML = Router();
};

console.log('hola');

window.addEventListener('DOMContentLoaded', render);
window.addEventListener('hashchange', Router);
/* Eventos del template */
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#login') {
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
      const promise = loginUser(data.email, data.password);
      promise.then(() => {
        alert('Bienvenido');
        window.location.hash = '#timeline';
      });
      promise.catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        $('.error').insertAdjacentHTML('beforeend', errorCode);
        setTimeout(() => {
          $('.error').innerHTML = '';
        }, 5000);
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
      const promise = createUser(data.email, data.password);
      promise.then(() => {
        alert('Bienvenido');
        window.location.hash = '#login';
      });
      promise.catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        $('.error').insertAdjacentHTML('beforeend', errorCode);
        setTimeout(() => {
          $('.error').innerHTML = '';
        }, 5000);
      });
    });
  }
});