const moment = require('moment');

const getAge = () => {
   const one = require('./one.js');
   
   const birthday = moment(one.birthday, 'YYYY');
   if(one.birthday === null || one.birthday === undefined) {
      console.log('birthday is not define');
      return false;
   } 
   const age = moment().diff(birthday, "years");
   console.log(age);
};

module.exports = {
   getAge,
}