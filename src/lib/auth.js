import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
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
  signInWithPopup(auth, provider);
  return signInWithPopup;
};
