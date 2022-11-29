import { addDoc, collection } from './imports.js';
import { db } from './config.js';

export const addUser = (user) => addDoc(collection(db, 'users'), user);
