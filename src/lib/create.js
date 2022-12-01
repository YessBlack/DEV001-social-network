import {
  addDoc, setDoc, doc, collection,
} from './imports.js';
import { db } from './config.js';

export const addUser = (user, id) => setDoc(doc(db, 'users', id), user);
