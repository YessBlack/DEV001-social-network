import {
  addPost,
  getPosts,
  onGetPost,
  deletePost,
  getPost,
  updatePost,
  storageRef,
} from '../src/lib/crud.js';

import {
  ref,
  addDoc,
  onSnapshot,
  getDocs,
  deleteDoc,
  getDoc,
  updateDoc,
} from '../src/lib/imports.js';

jest.mock('../src/lib/imports.js');

describe('addPost', () => {
  it('debería ser una función', () => {
    expect(typeof addPost).toBe('function');
  });
  it('debería poder agregar un post', () => {
    addPost();
    expect(addDoc).toHaveBeenCalled();
  });
});

describe('getPosts', () => {
  it('debería ser una función', () => {
    expect(typeof getPosts).toBe('function');
  });
  it('debería poder obtener los posts', () => {
    getPosts();
    expect(getDocs).toHaveBeenCalled();
  });
});

describe('onGetPost', () => {
  it('debería ser una función', () => {
    expect(typeof onGetPost).toBe('function');
  });
  it('debería poder obtener los posts', () => {
    onGetPost();
    expect(onSnapshot).toHaveBeenCalled();
  });
});

describe('deletePost', () => {
  it('debería ser una función', () => {
    expect(typeof deletePost).toBe('function');
  });
  it('debería poder eliminar un post', () => {
    deletePost();
    expect(deleteDoc).toHaveBeenCalled();
  });
});

describe('getPost', () => {
  it('debería ser una función', () => {
    expect(typeof getPost).toBe('function');
  });
  it('debería poder obtener un post', () => {
    getPost();
    expect(getDoc).toHaveBeenCalled();
  });
});

describe('updatePost', () => {
  it('debería ser una función', () => {
    expect(typeof updatePost).toBe('function');
  });
  it('debería poder actualizar un post', () => {
    updatePost();
    expect(updateDoc).toHaveBeenCalled();
  });
});

describe('storageRef', () => {
  it('debería ser una función', () => {
    expect(typeof storageRef).toBe('function');
  });
  it('debería poder obtener una referencia', () => {
    storageRef();
    ref.mockReturnValue('ref');
    expect(ref).toHaveBeenCalled();
  });
});
