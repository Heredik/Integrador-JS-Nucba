const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

//Search
const search = document.querySelector('.search');
const btnSearch = document.querySelector('.btn-search');
const menuSearch = document.querySelector('.menu__search');

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

/* setInterval(() => {
  next();
}, 10000); */

const init = () => {
  btnRight.addEventListener('click', next);
  btnLeft.addEventListener('click', prev);
  btnSearch.addEventListener('click', () => {
    menuSearch.classList.toggle('active');
    search.focus();
  });
};

init();
