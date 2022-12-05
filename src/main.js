import { login } from './components/Login.js';
import { Router, exeEvents } from './components/Router.js';
import { timeline } from './components/Timeline.js';

const $ = (selector) => document.querySelector(selector);

const render = () => {
  $('#root').innerHTML = Router();
  exeEvents();
};

window.onpopstate = () => {
  $('#root').innerHTML = Router();
};

window.addEventListener('DOMContentLoaded', render);
window.addEventListener('hashchange', render);
