const os = require('os');

const func = () => {
   const cpusInfo = os.cpus();
   for (let i of cpusInfo) {
      console.log('Speed of cpu:', i.speed);
   }
};

module.exports.func = func();
