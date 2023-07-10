const loginForm = document.getElementById('form__login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageError = document.getElementById('form__error');

const users = JSON.parse(localStorage.getItem('users')) || [];

const saveToSessionStorage = user => {
  sessionStorage.setItem('activeUser', JSON.stringify(user));
};

//*  Funciones auxiliares */

const checkIsEmpty = input => {
  return !input.value.trim().length;
};

const checkEmailExist = input => {
  return users.some(user => user.email === input.value.trim());
};

const checkPasswordExist = input => {
  const user = users.find(user => user.email === emailInput.value.trim());
  return user.password === passwordInput.value.trim();
};

const Error = message => {
  messageError.textContent = message;
};

const accountValid = () => {
  let valid = false;

  if (checkIsEmpty(emailInput)) {
    Error('Por favor, complete los campos');
    return;
  }
  if (checkIsEmpty(passwordInput)) {
    Error('Por favor, complete los campos');
    return;
  }

  if (!checkEmailExist(emailInput)) {
    Error('El email ingresado no es válido');
    return;
  }
  if (!checkPasswordExist(emailInput)) {
    Error('La contraseña ingresada no es válida');
    return;
  }
  valid = true;
  messageError.textContent = '';
  return valid;
};

//* Funcion general

function login(e) {
  e.preventDefault();

  if (accountValid()) {
    const user = users.find(user => user.email === emailInput.value.trim());
    console.log(user);
    saveToSessionStorage(user);
    window.location.href = '/index.html';
  }
}

const init = () => {
  loginForm.addEventListener('submit', login);
};
init();
