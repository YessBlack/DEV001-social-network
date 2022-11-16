import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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
