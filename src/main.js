// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from './router.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChbY78bZsBles4iIY64FCX7dys64lzrVA',
  authDomain: 'foodtrack-6348d.firebaseapp.com',
  projectId: 'foodtrack-6348d',
  storageBucket: 'foodtrack-6348d.appspot.com',
  messagingSenderId: '128983646489',
  appId: '1:128983646489:web:098956b4d4e31695bf8588',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

const $ = (selector) => document.querySelector(selector);

// Mostrar las páginas

const render = () => {
  $('#root').innerHTML = Router();
};

window.pushState = () => {
  $('#root').innerHTML = '';
  $('#root').innerHTML = Router();
};

window.addEventListener('DOMContentLoaded', render);
window.addEventListener('hashchange', Router);

/* Eventos del template */
if (window.location.hash === '#/login') {
  $('#formLogin').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const auth = getAuth();
    const promise = signInWithEmailAndPassword(auth, data.email, data.password);
    promise.then(() => {
      alert('Bienvenido');
    });
    promise.catch((err) => console.log(err.message));
  });
}
if (window.location.hash === '#/registrar') {
  $('#formRegister').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const auth = getAuth();
    const promise = createUserWithEmailAndPassword(auth, data.email, data.password);
    promise.catch((err) => console.log(err.message));
  });
}
