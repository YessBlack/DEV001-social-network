export const googleAuthProviderHelper = jest.fn();
export class GoogleAuthProvider {
  constructor() {
    googleAuthProviderHelper();
  }
}
export const createUserWithEmailAndPassword = jest.fn();
export const getAuth = jest.fn(() => ({ currentUser: { displayName: 'hola', photoURL: 'hola' } }));
export const signInWithEmailAndPassword = jest.fn();
export const signInWithPopup = jest.fn();
export const sendPasswordResetEmail = jest.fn();
export const initializeApp = jest.fn();
export const signOut = jest.fn();
export const onAuthStateChanged = jest.fn();
export const updateProfile = jest.fn();

export const getFirestore = jest.fn();
export const collection = jest.fn();
export const addDoc = jest.fn();
export const onSnapshot = jest.fn();
export const getDocs = jest.fn();
export const deleteDoc = jest.fn();
export const getDoc = jest.fn();
export const doc = jest.fn();
export const updateDoc = jest.fn();
export const ref = jest.fn();
export const uploadBytes = jest.fn();
export const getDownloadURL = jest.fn();
export const getStorage = jest.fn();
