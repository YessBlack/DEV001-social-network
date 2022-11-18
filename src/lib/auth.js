import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
}
  from './imports.js';

// eslint-disable-next-line no-unused-vars
import { app } from './config.js';

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

export const resetPasswordEmail = (email) => {
  const auth = getAuth();
  return sendPasswordResetEmail(auth, email);
};

export const signOutUser = () => {
  const auth = getAuth();
  return signOut(auth);
};
