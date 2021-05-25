const gridForm = document.forms.gridForm;
const gridBlock = document.querySelector('.grid-wrapper');
const up = document.querySelector('.up');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const down = document.querySelector('.down');
const spider = document.querySelector('.spider-img');
let spiderX = 10;
let spiderY = 10;

const getParam = () => {
   const data = new FormData(gridForm);
   const paramRows = Number(data.get('paramRows').trim());
   const paramCols = Number(data.get('paramCols').trim());
   return [paramRows, paramCols];
}
const setParam = () => {
   const params = getParam();
   const paramsCount = params[0] * params[1];
   const gridCell = `<div class="grid_cell"></div>`;
   let content = '';

   gridBlock.style.gridTemplateRows = `repeat(${params[0]}, 1fr)`;
   gridBlock.style.gridTemplateColumns = `repeat(${params[1]}, 1fr)`;

   for (let i = paramsCount; i > 0; i--) {
      content += gridCell;
   }
   gridBlock.innerHTML = content;
}

gridForm.addEventListener('submit', (ev) => {
   ev.preventDefault();
   gridBlock.innerHTML = '';
   setParam();
});

up.addEventListener('mousedown', (ev) => {
   up.classList.add('pressed');
   spiderY -= 55;
   spider.style.top = `${spiderY}px`;
});
up.addEventListener('mouseup', (ev) => {
   up.classList.remove('pressed');
});

left.addEventListener('mousedown', (ev) => {
   left.classList.add('pressed');
   spiderX -= 55;
   spider.style.left = `${spiderX}px`;
});
left.addEventListener('mouseup', (ev) => {
   left.classList.remove('pressed');
});

right.addEventListener('mousedown', (ev) => {
   right.classList.add('pressed');
   spiderX += 55;
   spider.style.left = `${spiderX}px`;
});
right.addEventListener('mouseup', (ev) => {
   right.classList.remove('pressed');
});

down.addEventListener('mousedown', (ev) => {
   down.classList.add('pressed');
   spiderY += 55;
   spider.style.top = `${spiderY}px`;
});
down.addEventListener('mouseup', (ev) => {
   down.classList.remove('pressed');
});

//  keyboard arrows

document.addEventListener('keydown', (ev) => {
   if (ev.code === 'ArrowUp') {
      up.classList.add('pressed');
      spiderY -= 55;
      spider.style.top = `${spiderY}px`;
   }
});
document.addEventListener('keyup', (ev) => {
   if (ev.code === 'ArrowUp') {
      up.classList.remove('pressed');
   }
});
document.addEventListener('keydown', (ev) => {
   if (ev.code === 'ArrowLeft') {
      left.classList.add('pressed');
      spiderX -= 55;
      spider.style.left = `${spiderX}px`;
   }
});
document.addEventListener('keyup', (ev) => {
   if (ev.code === 'ArrowLeft') {
      left.classList.remove('pressed');
   }
});

document.addEventListener('keydown', (ev) => {
   if (ev.code === 'ArrowRight') {
      right.classList.add('pressed');
      spiderX += 55;
      spider.style.left = `${spiderX}px`;
   }
});
document.addEventListener('keyup', (ev) => {
   if (ev.code === 'ArrowRight') {
      right.classList.remove('pressed');
   }
});

document.addEventListener('keydown', (ev) => {
   if (ev.code === 'ArrowDown') {
      down.classList.add('pressed');
      spiderY += 55;
      spider.style.top = `${spiderY}px`;
   }
});
document.addEventListener('keyup', (ev) => {
   if (ev.code === 'ArrowDown') {
      down.classList.remove('pressed');
   }
});