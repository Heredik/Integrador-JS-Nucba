//@ Llamando elemento del HTML
const formRegister = document.getElementById('form__register');
const inputName = document.getElementById('name');
const inputLastName = document.getElementById('lastName');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputNumber = document.getElementById('number');

//*  Local Storage

const users = JSON.parse(localStorage.getItem('users')) || [];

const saveToLocalStorage = () => {
  localStorage.setItem('users', JSON.stringify(users));
};

//* Funciones auxiliares

const errorMenssage = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.style.display = 'block';
  error.textContent = message;
};
const successMessage = input => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.style.display = 'none';
  error.textContent = '';
};

const checkIsEmpty = input => {
  return !input.value.trim().length;
};

const inputIsBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length <= max;
};

const checkEmailValid = input => {
  const va = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return va.test(input.value.trim());
};

const checkEmailExist = input => {
  return users.some(user => user.email === input.value.trim());
};

const securityPass = input => {
  const va =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return va.test(input.value.trim());
};

const checkPhoneValid = input => {
  const re = /^[0-9]{10}$/;
  return re.test(input.value.trim());
};

const checkPhoneExist = input => {
  return users.some(user => user.number === input.value.trim());
};

//*  Funciones de validacion de input

const checkTextInput = input => {
  let valid = false;
  const minCaracters = 4;
  const maxCaracters = 12;
  if (checkIsEmpty(input)) {
    errorMenssage(input, 'Este campo es obligatorio');
    return;
  }
  if (!inputIsBetween(input, minCaracters, maxCaracters)) {
    errorMenssage(
      input,
      `Este campo necesita entre ${minCaracters} y ${maxCaracters} caracteres`,
    );
    return;
  }

  successMessage(input);
  valid = true;
  return valid;
};

const checkEmailInput = input => {
  let valid = false;

  if (checkIsEmpty(input)) {
    errorMenssage(
      input,
      'Este campo es obligatorio, Por favor coloque un email',
    );
    return;
  }
  if (!checkEmailValid(input)) {
    errorMenssage(
      input,
      'El email que colocaste, no es valido. Prueba con otro',
    );
    return;
  }
  if (checkEmailExist(input)) {
    errorMenssage(input, 'Este email ya se encuentra en usó');
    return;
  }
  successMessage(input);
  valid = true;
  return valid;
};

const checkPasswordInput = input => {
  let valid = false;
  if (checkIsEmpty(input)) {
    errorMenssage(input, 'Coloque una contraseña');
    return;
  }
  if (!securityPass(input)) {
    errorMenssage(
      input,
      'La contraseña debe tener al menos 6 caracteres, una mayuscula, una minuscula, un numero, y un caracter especial. ',
    );
    return;
  }

  successMessage(input);
  valid = true;
  return valid;
};

const checkNumberInput = input => {
  let valid = false;

  if (checkIsEmpty(input)) {
    errorMenssage(input, 'Este campo es obligatorio');
    return;
  }

  if (!checkPhoneValid(input)) {
    errorMenssage(input, 'Este numero no es valido');
    return;
  }
  if (checkPhoneExist(input)) {
    errorMenssage(input, 'Este numero de celular ya se encuentra en uso');
    return;
  }
  successMessage(input);
  valid = true;
  return valid;
};

//*  Funciones generales

const submitHandler = e => {
  e.preventDefault();

  let isNameValid = checkTextInput(inputName);
  let isLastNameValid = checkTextInput(inputLastName);
  let isEmailValid = checkEmailInput(inputEmail);
  let isPasswordValid = checkPasswordInput(inputPassword);
  let checkPhoneValid = checkNumberInput(inputNumber);

  let ValidForm =
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    checkPhoneValid;

  if (ValidForm) {
    users.push({
      name: inputName.value,
      lastName: inputLastName.value,
      email: inputEmail.value,
      password: inputPassword.value,
      number: inputNumber.value,
    });
    saveToLocalStorage();
    alert('te registrate con exito!');
    window.location.href = 'login.html';
  }
};

const init = () => {
  formRegister.addEventListener('submit', submitHandler);
  inputName.addEventListener('input', () => checkTextInput(inputName));
  inputLastName.addEventListener('input', () => checkTextInput(inputLastName));
  inputEmail.addEventListener('input', () => checkEmailInput(inputEmail));
  inputPassword.addEventListener('input', () =>
    checkPasswordInput(inputPassword),
  );
  inputNumber.addEventListener('input', () => checkNumberInput(inputNumber));
};

init();
