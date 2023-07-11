//Search
const input = document.querySelector('.input');
const boton = document.querySelector('.btn');
const search = document.querySelector('.search');
//Menu
const menuHamb = document.querySelector('#menu');
const nav = document.getElementById('nav');
/* Slider hero */
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
slider.insertAdjacentElement('afterbegin', sliderSectionLast);
/* Subscribe */
const btnSub = document.querySelector('.subscribe__btn');

const formFooter = document.querySelector('#form__footer');

//Go Top
const contenedorGoTop = document.querySelector('.go-top-container');
const topBtn = document.querySelector('.go-top-button');

/* Function Activa menu */
function activeMenu() {
  menuHamb.classList.toggle('close');
  nav.classList.toggle('show');
}

/* Funcion para cambiar la imagen del slider */
function next() {
  let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
  slider.style.marginLeft = '-200%';
  slider.style.transition = 'all 0.5s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = '-100%';
  }, 500);
}

function prev() {
  let sliderSection = document.querySelectorAll('.slider__section');
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = '0';
  slider.style.transition = 'all 0.5s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = '-100%';
  }, 500);
}
//! ACTIVAR
setInterval(() => {
  next();
}, 10000);

/*Function comprar subscripcion  */

const buyFinished = () => {
  swal.fire({
    position: 'top',
    title: 'Membresia Santa Media',
    icon: 'success',
    text: 'Te has Subscrito con Exito!',
    text: 'Membresia valida hasta el 17 de Agosto ',
  });
};

/* Gotop */

const scroll = () => {
  window.scrollTo({ top: 0 });
};

const init = () => {
  btnRight.addEventListener('click', next);
  btnLeft.addEventListener('click', prev);
  boton.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
  });
  menuHamb.addEventListener('click', activeMenu);
  btnSub.addEventListener('click', buyFinished);
  topBtn.addEventListener('click', scroll);
  nav.addEventListener('click', e => {
    if (e.target.id === 'nav') {
      nav.classList.remove('show');
      menuHamb.classList.remove('close');
      console.log('dwadwa');
    }
  });
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
};

init();
