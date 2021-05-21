const moment = require('moment');

const birthday = '01.01.1995';

const calcAge = (age) => {
   const format = ["DD.MM.YYYY"];
   const formatedAge = moment(age, format);

   const years = moment().diff(formatedAge, "years");
   const months = moment().diff(formatedAge.add(years, 'years'), 'months');
   const days = moment().diff(formatedAge.add(years, months, 'years', 'months'), 'days');

   // const fullAge = (years + ' years, ' + months + ' months, ' + days + ' days, ');
   const fullAge = `My age is: ${years} years, ${months} months, ${days} days`;
   return fullAge;
}

console.log(calcAge(birthday));