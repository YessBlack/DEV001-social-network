import { Router, exeEvents } from './components/Router.js';

const $ = (selector) => document.querySelector(selector);

const render = () => {
  // funcion que pinta el html en el root
  $('#root').innerHTML = Router();
  exeEvents();
};

window.onpopstate = () => {
  // Mantiene el historial de vistas en la ventana del navegador
  $('#root').innerHTML = Router();
};

// Cargar la vista cuando cargue el DOM y cuando cambie el hash
window.addEventListener('DOMContentLoaded', render);
window.addEventListener('hashchange', render);
