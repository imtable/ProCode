const httpRunner = require('./http');
const WSRunner = require('./ws');

const run = () => {
  const server = httpRunner();
  // WSRunner(server);
};

module.exports = run;
