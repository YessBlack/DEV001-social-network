// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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
// Registro de usuario
// const btn = document.createElement('div');
// const btn2 = document.createElement('button');
// btn2.className = 'registro';
// document.querySelector('.register').innerHTML = 'Hide Result';
// $('.register-button').insertAdjacentHTML('beforeend', btn.appendChild());
if (window.location.pathname === '/registro') {
  $('#registro').addEventListener('click', () => {
    const email = $('#email').value;
    const password = $('#password').value;
    const auth = getAuth();
    const promise = createUserWithEmailAndPassword(auth, email, password);
    promise.catch((e) => console.log(e.message));
  });
}

// Inicio de sesión
// const loginButton = document.createElement('div');
// const loginRegister = document.createElement('button');
// loginRegister.className = 'login';
// $('.login-button').insertAdjacentHTML('beforeend', loginButton.appendChild(loginRegister));
if (window.location.pathname === '/login') {
  $('#login').addEventListener('click', () => {
    const emailLogin = $('#emailLogin').value;
    const passwordLogin = $('#passwordLogin').value;
    const auth = getAuth();
    const promise = signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
    promise.then(() => {
      alert('Bienvenido');
    });
    promise.catch((e) => console.log(e.message));
  });
}

