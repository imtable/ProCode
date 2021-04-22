const form = document.forms.clearance;
const btnMultiply = document.querySelector('.btn-multiply');
const btnDivide = document.querySelector('.btn-divide');
const btnPow = document.querySelector('.btn-pow');
const btnSqrt = document.querySelector('.btn-sqrt');
const result = document.querySelector('.result');
const inputOne = document.querySelector('.num-1');
const inputTwo = document.querySelector('.num-2');

const multiply = (arg, arg2) => {
   return Number(arg.value) * Number(arg2.value);
}
const divide = (arg, arg2) => {
   return Number(arg.value) / Number(arg2.value);
}
const pow = (arg, arg2) => {
   return Math.pow(Number(arg.value), Number(arg2.value));
}
const sqrt = (arg) => {
   return Math.sqrt(Number(arg.value));
}

btnMultiply.addEventListener('click', (ev) => {
   ev.preventDefault();
   result.innerHTML = multiply(inputOne, inputTwo);
});
btnDivide.addEventListener('click', (ev) => {
   ev.preventDefault();
   result.innerHTML = divide(inputOne, inputTwo);
});
btnPow.addEventListener('click', (ev) => {
   ev.preventDefault();
   result.innerHTML = pow(inputOne, inputTwo);
});
btnSqrt.addEventListener('click', (ev) => {
   ev.preventDefault();
   result.innerHTML = sqrt(inputOne);
});