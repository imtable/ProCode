const os = require('os');

const func = () => {
   const cpusInfo = os.cpus();
   for (let i of cpusInfo) {
      console.log('Name of cpu:', i.model);
   }
};

module.exports.func = func();
