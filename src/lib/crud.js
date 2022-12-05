import {
  addDoc, collection,
  onSnapshot,
  getDocs,
} from './imports.js';
import { db } from './config.js';

export const realTime = (showPost) => onSnapshot(collection(db, 'posts'), showPost);

export const addPost = (post) => addDoc(collection(db, 'posts'), post);

export const getPost = () => getDocs(collection(db, 'posts'));
