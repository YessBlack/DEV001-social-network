import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateProfile,
}
  from './imports.js';

// eslint-disable-next-line no-unused-vars
import { app } from './config.js';

const auth = getAuth();

export const createUser = (email, passwd) => createUserWithEmailAndPassword(auth, email, passwd);

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const loginGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());

export const resetPasswordEmail = (email) => sendPasswordResetEmail(auth, email);

export const signOutUser = () => signOut(auth);

export const authState = (user) => onAuthStateChanged(auth, user);

export const updateProfileUser = (user) => updateProfile(auth.currentUser, user);
