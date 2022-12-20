export const registro = jest.fn(() => '<h1>registro</h1>');
export const login = jest.fn(() => '<h1>login</h1>');
export const timeline = jest.fn(() => '<h1>timeline</h1>');
export const resetPassword = jest.fn(() => '<h1>resetPassword</h1>');
export const welcome = jest.fn(() => '<h1>welcome</h1>');

export const Router = jest.fn(() => {
  if (window.location.hash === '#/') {
    return welcome();
  } if (window.location.hash === '#registrar') {
    return registro();
  } if (window.location.hash === '#login') {
    return login();
  } if (window.location.hash === '#timeline') {
    return timeline();
  } if (window.location.hash === '#recuperar') {
    return resetPassword();
  }
  return welcome();
});

export const eventsRegistro = jest.fn(() => {
  const h1 = document.querySelector('h1');
  h1.innerHTML = 'mock router';
});

export const exeEvents = jest.fn(() => {
  if (window.location.hash === '#registrar') {
    return eventsRegistro();
  }
  return 'Hola';
});
