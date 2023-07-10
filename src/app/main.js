//Search
const input = document.querySelector('.input');
const boton = document.querySelector('.btn');
const search = document.querySelector('.search');

//Menu
const menuHamb = document.querySelector('#menu');
const nav = document.querySelector('.nav')
function activeMenu() {
  menuHamb.classList.toggle('close');
  nav.classList.toggle('show');
}

//Header scroll
/* function scrollWindow() {
  //Header
  const logoNav = document.querySelector('.nav-logo');
  const header = document.querySelector('header');
  const contnav = document.querySelector('.container-logo');

  if (window.scrollY > 80) {
    header.classList.add('bottom');
    contnav.classList.add('logoactive');
    logoNav.classList.add('showlogo');
  } else if (window.scrollY == 0) {
    header.classList.remove('bottom');
    contnav.classList.remove('logoactive');
    logoNav.classList.remove('showlogo');
  }
} */

/* Slider hero */
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

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
/* setInterval(() => {
  next();
}, 10000); */

const init = () => {
  btnRight.addEventListener('click', next);
  btnLeft.addEventListener('click', prev);
  boton.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
  });

  /* window.addEventListener('scroll', scrollWindow); */
  menuHamb.addEventListener('click', activeMenu);
};

init();
