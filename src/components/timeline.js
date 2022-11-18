import { adios } from '../lib/auth.js';

export const timeline = () => {
  const pageTimeline = `<h1>timeline</h1>
<button class='bye'> bye</button>`;
  return pageTimeline;
};

const $ = (selector) => document.querySelector(selector);
export const hi = () =>{
const hastaLuego=
$('.bye').addEventListener('click', () => {
  console.log('hi');
  const promise= adios();
  promise.then(() => {
    window.location.hash='#'
  });
  promise.catch((error) => {
    console.log('buu');
    const errorCode = error.code;
    // eslint-disable-next-line no-unused-vars
    const errorMessage = error.message;
  });
});
return hastaLuego;
};