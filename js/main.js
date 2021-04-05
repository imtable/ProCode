let btnSave = document.querySelector('.btn-save');
let firstName = document.querySelector('.form_firstname');
let lastName = document.querySelector('.form_lastname');
let midName = document.querySelector('.form_midname');

btnSave.addEventListener('click', (ev) => {
   let card = document.querySelector('.card:not(.show)');
   let cardFirstName = document.querySelector('.card:not(.show) .card_firstname-value');
   let cardLastName = document.querySelector('.card:not(.show) .card_lastname-value');
   let cardMidName = document.querySelector('.card:not(.show) .card_midname-value');

   cardFirstName.innerHTML = firstName.value;
   cardLastName.innerHTML = lastName.value;
   cardMidName.innerHTML = midName.value;
   card.classList.add('show');
});