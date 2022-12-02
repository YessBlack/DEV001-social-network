import { createUser, loginGoogle, updateProfileUser } from '../lib/auth.js';
import { addUser } from '../lib/create.js';
import { mayuscula } from '../lib/index.js';

export const registro = () => {
  const pageRegistro = `<section class="containerAuth container">   
    <section class="containerAuth__content">
      <h1 class="containerAuth__title-content">Registrate</h1>
      <div class= "containerAuth__register-content">
        <form class="containerAuth__form-register" id="formRegister">
          <p class="inputs-vacios"></p>          
          <input type="text" class="containerAuth__name-form" id="name" placeholder="name" name="name">          
          <p class="error-mail"></p>
          <input class="containerAuth__email-form" placeholder="email" id="email" name="email">
          <div class="ojo">
            <span id="eye-registro" class="eye-registro"><i id="icon" class="fa-sharp fa-solid fa-eye-slash"></i></span>
          </div>                   
          <input class="containerAuth__password-form " placeholder="Contraseña" id="password" name="password" type="password">
          <p class="error-password"></p> 
          <input type="text" class="containerAuth__country-form password-eye" placeholder="País" id="country" name="country"><br>          
          <button class="containerAuth__login-button">Registarse</button>
          <h3 class="lines-effect">OR</h3>          
        </form>
        <button id="registerGoogle" class="containerAuth__button-google">
          <img src="assets/img/google.png" alt="logo de google">
          Registrarse con Google
        </button>
      </div>    
        <div class="error"></div>  
    </section>
    <div class="img-desktop">
    <img src="assets/img/background_principal__rec.jpg">
  </div>
  </section>`;
  return pageRegistro;
};

export const eventsRegistro = () => {
  const $ = (selector) => document.querySelector(selector);
  /* Iniciar sesión con email y contraseña */
  $('#formRegister').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (data.email === '' || data.password === '') {
      $('.inputs-vacios').innerHTML = 'Todos los campos son obligatorios';
      $('#name').style.borderColor = 'red';
      $('#country').style.borderColor = 'red';
      $('#email').style.borderColor = 'red';
      $('#password').style.borderColor = 'red';
      setTimeout(() => {
        $('.inputs-vacios').innerHTML = '';
      }, 5000);
    } else {
      createUser(data.email, data.password)
        .then((res) => {
          updateProfileUser({
            displayName: mayuscula(data.name),
            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9J4o1n77Jtkz4DCltlA_lhqTZGgTUoIYRw&usqp=CAU',
          });
          const user = {
            id: res.user.uid,
            name: mayuscula(data.name),
            email: mayuscula(data.email),
            country: mayuscula(data.country),
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9J4o1n77Jtkz4DCltlA_lhqTZGgTUoIYRw&usqp=CAU',
          };
          addUser(user, user.id)
            .then(() => {
              window.location.hash = '#timeline';
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/email-already-in-use') {
            $('.error-mail').innerHTML = 'Este email ya se encuentra en uso';
            setTimeout(() => {
              $('.error-mail').innerHTML = '';
            }, 5000);
          }
          if (errorCode === 'auth/weak-password') {
            $('.error-password').innerHTML = 'La contraseña debe tener mínimo 6 cáracteres';
            setTimeout(() => {
              $('.error-password').innerHTML = '';
            }, 5000);
          }
        });
    }
  });

  /* Iniciar sesión con google */
  $('#registerGoogle').addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle()
      .then((res) => {
        const user = {
          id: res.user.uid,
          name: mayuscula(res.user.displayName),
          email: mayuscula(res.user.email),
          country: '',
          photo: res.user.photoURL,
        };
        addUser(user, user.id)
          .then(() => {
            window.location.hash = '#timeline';
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  /* Ocultar y mostrar contraseña */
  $('#eye-registro').addEventListener('click', () => {
    if ($('.containerAuth__password-form').type === 'password') {
      $('.containerAuth__password-form').type = 'text';
      $('#icon').classList.remove('fa-eye-slash');
      $('#icon').classList.add('fa-eye');
    } else if ($('.containerAuth__password-form').type === 'text') {
      $('.containerAuth__password-form').type = 'password';
      $('#icon').classList.remove('fa-eye');
      $('#icon').classList.add('fa-eye-slash');
    }
  });
};
