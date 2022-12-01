export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

export {
  getFirestore,
  addDoc,
  setDoc,
  collection,
  doc,
} from 'firebase/firestore';

export { initializeApp } from 'firebase/app';
