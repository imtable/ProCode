const power = document.querySelector('.btn-power');
const door = document.querySelector('.door');
const status = document.querySelector('.status');

let isOnPower = false;
let isOpenDoor = false;

const detect = (arg) => {
   if (isOnPower && isOpenDoor) {
      status.innerHTML = 'Danger';
   } else if (isOnPower === true && isOpenDoor === false) {
      status.innerHTML = 'Ok';
   } else if (isOnPower === false) {
      status.innerHTML = 'Alarming is off';
   }
}
power.addEventListener('click', (ev) => {
   isOnPower = !isOnPower;
   if (isOnPower) {
      power.classList.remove('on');
      power.classList.add('off');
      power.innerHTML = 'off';
   } else {
      power.classList.remove('off');
      power.classList.add('on');
      power.innerHTML = 'on';
   }
   detect(isOnPower);
});

door.addEventListener('click', (ev) => {
   isOpenDoor = !isOpenDoor;
   if (isOpenDoor) {
      door.classList.remove('on');
      door.classList.add('off');
      door.innerHTML = 'open';
   } else {
      door.classList.remove('off');
      door.classList.add('on');
      door.innerHTML = 'close';
   }
   detect(isOpenDoor);
});