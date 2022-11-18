import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup,
  sendPasswordResetEmail,
  signOut,
} from './imports.js';
import { app } from './config.js';

console.log(app);

export const createUser = (email, password) => {
  const auth = getAuth();
  const promise = createUserWithEmailAndPassword(auth, email, password);
  return promise;
};

export const loginUser = (email, password) => {
  const auth = getAuth();
  const promise = signInWithEmailAndPassword(auth, email, password);
  return promise;
};
export const authenticationGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
export const resetContraseña = (email) => {
  const auth = getAuth();
  return sendPasswordResetEmail(auth, email);
};
export const adios = () => {
   const auth = getAuth();
  return signOut(auth);
}