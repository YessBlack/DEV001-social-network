import {
  createUser,
  loginUser,
  loginGoogle,
  resetPasswordEmail,
  signOutUser,
  authState,
  updateProfileUser,
  currentUserInfo,
} from '../src/lib/auth.js';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateProfile,
  getAuth,
} from '../src/lib/imports.js';

jest.mock('../src/lib/imports.js');

describe('createUser', () => {
  beforeEach(() => {
    createUserWithEmailAndPassword.mockImplementationOnce(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });

  it('Deberia llamar a createUserWithEmailAndPassword', () => {
    createUser();
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Deberia retornar una promesa', () => {
    expect(createUser()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(createUser()).resolves.toBe('resolve');
  });
});

describe('loginUser', () => {
  beforeEach(() => {
    signInWithEmailAndPassword.mockImplementation(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof loginUser).toBe('function');
  });

  it('Deberia llamar a signInWithEmailAndPassword', () => {
    loginUser();
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Deberia retornar una promesa', () => {
    expect(loginUser()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(loginUser()).resolves.toBe('resolve');
  });
});

describe('loginGoogle', () => {
  beforeEach(() => {
    signInWithPopup.mockImplementationOnce(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });

  it('Deberia llamar a signInWithPopup', () => {
    loginGoogle();
    expect(signInWithPopup).toHaveBeenCalled();
  });

  it('Deberia retornar una promesa', () => {
    expect(loginGoogle()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(loginGoogle()).resolves.toBe('resolve');
  });
});

describe('resetPasswordEmail', () => {
  beforeEach(() => {
    sendPasswordResetEmail.mockImplementation(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof resetPasswordEmail).toBe('function');
  });

  it('Deberia llamar a sendPasswordResetEmail', () => {
    resetPasswordEmail();
    expect(sendPasswordResetEmail).toHaveBeenCalled();
  });

  it('Deberia retornar una promesa', () => {
    expect(resetPasswordEmail()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(resetPasswordEmail()).resolves.toBe('resolve');
  });
});

describe('signOutUser', () => {
  beforeEach(() => {
    signOut.mockImplementationOnce(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof signOutUser).toBe('function');
  });

  it('Deberia llamar a signOut', () => {
    signOutUser();
    expect(signOut).toHaveBeenCalled();
  });

  it('Deberia retornar una promesa', () => {
    expect(signOutUser()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(signOutUser()).resolves.toBe('resolve');
  });
});

describe('authState', () => {
  beforeEach(() => {
    onAuthStateChanged.mockImplementationOnce(() => ({ uid: '123' }));
  });
  it('Debería ser una función', () => {
    expect(typeof authState).toBe('function');
  });

  it('Deberia llamar a onAuthStateChanged', () => {
    authState();
    expect(onAuthStateChanged).toHaveBeenCalled();
  });

  it('Deberia retornar un objeto', () => {
    expect(authState()).toEqual({ uid: '123' });
  });
});

describe('updateProfileUser', () => {
  beforeEach(() => {
    updateProfile.mockImplementationOnce(() => Promise.resolve('resolve'));
  });

  it('Debería ser una función', () => {
    expect(typeof updateProfileUser).toBe('function');
  });

  it('Deberia llamar a updateProfile', () => {
    updateProfileUser();
    expect(updateProfile).toHaveBeenCalled();
  });

  it('Deberia retornar una promesa', () => {
    expect(updateProfileUser()).toBeInstanceOf(Promise);
  });

  it('Deberia retornar una promesa resuelta', async () => {
    await expect(updateProfileUser()).resolves.toBe('resolve');
  });
});

describe('currentUserInfo', () => {
  it('Debería ser una función', () => {
    expect(typeof currentUserInfo).toBe('function');
  });

  it('Deberia llamar a getAuth', () => {
    currentUserInfo();
    expect(getAuth).toHaveBeenCalled();
  });

  it('Deberia retornar un objeto', () => {
    expect(currentUserInfo()).toEqual({ displayName: 'hola', photoURL: 'hola' });
  });
});
