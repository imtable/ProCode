var app = require('../../../servers/http');
var debug = require('debug')('exprs:server');
var http = require('http');

const { httpPort } = require('./../../../config/').server;

const run = () => {
   var port = httpPort;
   app.set('port', port);

   /**
    * Create HTTP server.
    */

   var server = http.createServer(app);

   /**
    * Listen on provided port, on all network interfaces.
    */

   server.listen(port);
   server.on('error', onError);
   server.on('listening', onListening);

   /**
    * Event listener for HTTP server "error" event.
    */

   function onError(error) {
   if (error.syscall !== 'listen') {
   throw error;
   }

   var bind = typeof port === 'string'
   ? 'Pipe ' + port
   : 'Port ' + port;

   // handle specific listen errors with friendly messages
   switch (error.code) {
   case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
   case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
   default:
      throw error;
   }
   }

   /**
    * Event listener for HTTP server "listening" event.
    */

   function onListening() {
   var addr = server.address();
   var bind = typeof addr === 'string'
   ? 'pipe ' + addr
   : 'port ' + addr.port;
   debug('Listening on ' + bind);
   }
   return server;
};

module.exports = run;
