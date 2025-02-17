import { initializeApp, getStorage, getFirestore } from './imports.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChbY78bZsBles4iIY64FCX7dys64lzrVA',
  authDomain: 'foodtrack-6348d.firebaseapp.com',
  databaseURL: 'https://foodtrack-6348d-default-rtdb.firebaseio.com',
  projectId: 'foodtrack-6348d',
  storageBucket: 'gs://foodtrack-6348d.appspot.com',
  messagingSenderId: '128983646489',
  appId: '1:128983646489:web:098956b4d4e31695bf8588',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
