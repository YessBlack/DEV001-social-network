// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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

const $=(selector)=>document.querySelector(selector);

$('#singUp').addEventListener('click',()=>{
  const emailLogin=$('#emailLogin').value;
  const passwordLogin=$('#passwordLogin').value;
  const auth= getAuth();
  const promise=signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
  promise.then(()=>{
    alert("Bienvenido");
  });
  promise.catch((e)=>console.log(e.message));

})

$('#signin').addEventListener('click',()=>{
  const email=$('#email').value;
  const password=$('#password').value;
  const auth= getAuth();
  const promise= createUserWithEmailAndPassword (auth,email ,password);
  promise.catch((e)=>console.log(e.message));
  console.log(promise)
})

