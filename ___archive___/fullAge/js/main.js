const moment = require('moment');

const myBirthday = '01.01.1995';

const calcAge = (arg) => {
   const birthday = moment(arg, "DD.MM.YYYY");

   const years = moment().diff(birthday, "years");
   const months = moment().diff(birthday.add(years, 'years'), 'months');
   const days = moment().diff(birthday.add(years, months, 'years', 'months'), 'days');

   const age = `My age is: ${years} years, ${months} months, ${days} days`;
   return age;
}

console.log(calcAge(myBirthday));