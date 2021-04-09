const form = document.forms.clearance;

const calc = (price, type, year) => {
   const result = (price * type) * (year / 100);
   return result.toFixed(2);
}

form.addEventListener('submit', (ev) => {
   ev.preventDefault();
   const price = Number(document.querySelector('.price').value);
   const type = document.querySelector('.btn-radio:checked').value;
   const year = document.querySelector('.year').value;
   const result = document.querySelector('.result');

   result.innerHTML = calc(price, type, year) + ' $';
});
// (цена * тип автомобиля) * (год / 100)
// тип авто: Л = 1 Э = 0, 7 М = 1, 2 Г = 3