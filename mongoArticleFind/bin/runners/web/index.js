const httpRunner = require('./http');
const WSRunner = require('./ws');
const mongodb = require('./mongodb');
 
const run = () => {
   const server = httpRunner();
   WSRunner(server);
   mongodb();
};

module.exports = run;
