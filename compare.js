const moment = require('moment');

setInterval(() => {
   console.log('10 minute is lost')
}, 1111);

let birthday = null;

const setBirthday = (val) => {
   birthday = val;
   return birthday;
};

const getAge = () => {
   if(birthday === null || birthday === undefined) {
      console.log('birthday is not define');
      return false;
   } 
   birthday = moment(birthday, 'YYYY');
   const age = moment().diff(birthday, "years");
   console.log(age);
};

module.exports = {
   setBirthday,
   getAge,
}
