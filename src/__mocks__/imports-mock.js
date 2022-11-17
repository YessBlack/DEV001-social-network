const user = {
  currentUser: {
    uid: '1234klkjdid',
    email: 'dev@laboratoria.com',
  },
};

export const createUserWithEmailAndPassword = () => Promise.resolve(user);
export const getAuth = () => jest.fn();
export const initializeApp = () => jest.fn();
