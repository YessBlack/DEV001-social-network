import {
  addDoc, collection,
  onSnapshot,
  getDocs,
} from './imports.js';
import { db } from './config.js';

export const realTime = (cb) => onSnapshot(collection(db, 'posts'), cb);

export const addPost = (post) => addDoc(collection(db, 'posts'), post);

export const getPost = () => getDocs(collection(db, 'posts'));

export const onGetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);
