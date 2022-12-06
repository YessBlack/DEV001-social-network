import {
  addDoc,
  setDoc,
  collection,
  onSnapshot,
  getDocs,
  deleteDoc,
  getDoc,
  doc,
  updateDoc,
} from './imports.js';
import { db } from './config.js';

export const realTime = (cb) => onSnapshot(collection(db, 'posts'), cb);

export const addPost = (post) => addDoc(collection(db, 'posts'), post);

export const getPosts = () => getDocs(collection(db, 'posts'));

export const onGetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);

// export const addPost = (id, data) => setDoc(doc(db, 'posts', id), data);
