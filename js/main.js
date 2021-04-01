let show = document.querySelector('.btn-show');
let hide = document.querySelector('.btn-hide');
let popup = document.querySelector('.popup');

show.addEventListener('click', (ev) => {
   popup.classList.add('active');
});

hide.addEventListener('click', (ev) => {
   popup.classList.remove('active');
});