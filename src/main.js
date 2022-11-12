import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './lib/config.js';

const $ = (selector) => document.querySelector(selector);


$('#singUp').addEventListener('click', () => {
  const emailLogin = $('#emailLogin').value;
  const passwordLogin = $('#passwordLogin').value;
  const auth = getAuth();
  const promise = signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
  promise.then(() => {
    alert('Bienvenido');
  });
  promise.catch((e) => console.log(e.message));
});
