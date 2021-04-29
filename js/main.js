// __________model______________
const param = {
   br: 0,
   temp: 1000
};

// ________controller___________
const getParam = () => {
   return {
      br: param.br,
      temp: param.temp
   };
}

const setParam = (br, temp) => {
   param.br = br;
   param.temp = temp;
}

const plusBr = () => {
   const curParam = getParam();
   if (curParam.br >= 100) {
      return;
   }
   const newBr = curParam.br + 1;

   setParam(newBr, curParam.temp);
   renderBr();
}

const minusBr = () => {
   const curParam = getParam();

   if (curParam.br <= 0) {
      return;
   }
   const newBr = curParam.br - 1;

   setParam(newBr, curParam.temp);
   renderBr();
}

const plusTemp = () => {
   const curParam = getParam();
   if (curParam.temp >= 5000) {
      return;
   }
   const newTemp = curParam.temp + 500;

   setParam(curParam.br, newTemp);
   renderTemp();
}

const minusTemp = () => {
   const curParam = getParam();

   if (curParam.temp <= 1000) {
      return;
   }
   const newTemp = curParam.temp - 500;

   setParam(curParam.br, newTemp);
   renderTemp();
}

// ________view___________
const changeBg = () => {
   const lamp = document.querySelector('.lamp');
   const curParam = getParam().temp;
   if (curParam === 1000) {
      lamp.style.backgroundColor = 'crimson';
   } else if (curParam === 1500) {
      lamp.style.backgroundColor = 'red';
   } else if (curParam === 2000) {
      lamp.style.backgroundColor = 'orangered';
   } else if (curParam === 2500) {
      lamp.style.backgroundColor = 'darkorange';
   } else if (curParam === 3000) {
      lamp.style.backgroundColor = 'orange';
   } else if (curParam === 3500) {
      lamp.style.backgroundColor = 'sandybrown';
   } else if (curParam === 4000) {
      lamp.style.backgroundColor = 'peachpuff';
   } else if (curParam === 4500) {
      lamp.style.backgroundColor = 'yellow';
   } else if (curParam === 5000) {
      lamp.style.backgroundColor = 'palegoldenrod';
   }
}
const renderBr = () => {
   const curParam = getParam();
   const result = document.querySelector('.br-result');

   result.innerHTML = curParam.br;
}
const renderTemp = () => {
   const curParam = getParam();
   const result = document.querySelector('.temp-result');

   result.innerHTML = curParam.temp;
   changeBg();
}

const btnBrPlus = document.querySelector('.br-plus');
const btnBrMinus = document.querySelector('.br-minus');
const btnTempPlus = document.querySelector('.temp-plus');
const btnTempMinus = document.querySelector('.temp-minus');

btnBrPlus.addEventListener('click', (ev) => {
   plusBr();
});
btnBrMinus.addEventListener('click', (ev) => {
   minusBr();
});

btnTempPlus.addEventListener('click', (ev) => {
   plusTemp();
});
btnTempMinus.addEventListener('click', (ev) => {
   minusTemp();
});