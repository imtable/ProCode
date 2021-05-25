const classroom = [{
      name: 'Иванна',
      surname: 'Зимина',
      hw: 5,
   },
   {
      name: 'Александр',
      surname: 'Гетьманский',
      hw: 9,
   },
   {
      name: 'Наталья',
      surname: 'Горошко',
      hw: 7,
   },
   {
      name: 'Артем',
      surname: 'Шевчук',
      hw: 3,
   }, {
      name: 'Захар',
      surname: 'Эт_я_кста',
      hw: 3,
   }, {
      name: 'Денис',
      surname: 'Рудик',
      hw: 9,
   }, {
      name: 'Владислав',
      surname: 'Фамилия',
      hw: 6,
   }, {
      name: 'Андрей',
      surname: 'Тимошенко',
      hw: 9,
   }, {
      name: 'Алекс',
      surname: 'Грико',
      hw: 2,
   }, {
      name: 'Инна',
      surname: 'Олещенко',
      hw: 8,
   }, {
      name: 'Николай',
      surname: 'Зайченко',
      hw: 4,
   }, {
      name: 'Андрей',
      surname: 'Стегний',
      hw: 5,
   }, {
      name: 'Вова',
      surname: 'Фамилия',
      hw: 6,
   }, {
      name: 'Егор',
      surname: 'Фамилия',
      hw: 7,
   }
];
const btnList = document.querySelector('.btn-list');
const btnFilter = document.querySelector('.btn-filter');
const listDiv = document.querySelector('.classroom_list');
const filteredDiv = document.querySelector('.classroom_filtered');

const arrShow = (arr) => {
   for (let i of arr) {
      const name = i.name;
      const surname = i.surname;
      const hw = i.hw;
      const html = `
         <div class="person">
            <p class="name">Имя: ${name}</p>
            <p class="surname">Фамилия: ${surname}</p>
         </div>
      `
      listDiv.insertAdjacentHTML('beforeend', html);
   }
}

const arrShowFiltered = (arg) => {
   const filterArr = arg.filter((person) => {
      return person.hw >= 7;
   });
   for (let i of filterArr) {
      const name = i.name;
      const surname = i.surname;
      const hw = i.hw;
      const html = `
         <div class="person">
            <p class="name">Имя: ${name}</p>
            <p class="surname">Фамилия: ${surname}</p>
            <p class="hw">Домашек: ${hw}</p>
         </div>
      `
      filteredDiv.insertAdjacentHTML('beforeend', html);
   }
}
btnList.addEventListener('click', () => {
   listDiv.innerHTML = '';
   listDiv.classList.toggle('active');
   arrShow(classroom);
});

btnFilter.addEventListener('click', () => {
   filteredDiv.innerHTML = '';
   filteredDiv.classList.toggle('active');
   arrShowFiltered(classroom);
});