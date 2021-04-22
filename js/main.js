const form = document.forms.clearance;
const btnMultiply = document.querySelector('.btn-multiply');
const btnDivide = document.querySelector('.btn-divide');
const btnPow = document.querySelector('.btn-pow');
const btnSqrt = document.querySelector('.btn-sqrt');
const result = document.querySelector('.result');
const inputOne = document.querySelector('.num-1');
const inputTwo = document.querySelector('.num-2');
const inputToFixed = document.querySelector('.to-fixed');

const multiply = (arg, arg2) => {
   return Number(arg.value) * Number(arg2.value);
}
const divide = (arg, arg2) => {
   return Number(arg.value) / Number(arg2.value);;
}
const pow = (arg, arg2) => {
   return Math.pow(Number(arg.value), Number(arg2.value));
}
const sqrt = (arg) => {
   return Math.sqrt(Number(arg.value));
}
const fix = (arg, arg2) => {
   return arg.toFixed(Number(arg2.value));
}

btnMultiply.addEventListener('click', (ev) => {
   ev.preventDefault();
   result.innerHTML = fix(multiply(inputOne, inputTwo), inputToFixed);
});
btnDivide.addEventListener('click', (ev) => {
   ev.preventDefault();
   result.innerHTML = fix(divide(inputOne, inputTwo), inputToFixed);
});
btnPow.addEventListener('click', (ev) => {
   ev.preventDefault();
   result.innerHTML = fix(pow(inputOne, inputTwo), inputToFixed);
});
btnSqrt.addEventListener('click', (ev) => {
   ev.preventDefault();
   result.innerHTML = fix(sqrt(inputOne), inputToFixed);
});