const WebSocket = require('ws');

const run = (server) => {
   const wss1 = new WebSocket.Server({ noServer: true });
   const wss2 = new WebSocket.Server({ noServer: true });
   
   wss1.on('connection', function connection(ws) {
      console.log( (new Date().getMinutes()) + ':' + (new Date().getSeconds()) + ' connect to WS1' );
      let sum = 0;
      ws.on('message', (data) => {
         sum+= Number(data);
         console.log('received: %s', data);
         console.log('sum is: ', sum);

         if(sum > 11) {
            ws.send(sum);
         }
      });
   });

   wss2.on('connection', function connection(ws) {
      console.log( (new Date().getMinutes()) + ':' + (new Date().getSeconds()) + ' connect to WS2' );
      let sum = 0;
      ws.on('message', (data) => {
         sum+= Number(data);
         console.log('received: %s', data);
         console.log('sum is: ', sum);

         if(sum > 11) {
            ws.send(sum);
         }
      });
   });

   server.on('upgrade', function upgrade(request, socket, head) {
   const pathname = url.parse(request.url).pathname;

   if (pathname === '/') {
      wss1.handleUpgrade(request, socket, head, function done(ws) {
         wss1.emit('connection', ws, request);
      });
   } else if (pathname === '/newroute') {
      wss2.handleUpgrade(request, socket, head, function done(ws) {
         wss2.emit('connection', ws, request);
      });
   } else {
      socket.destroy();
   }
   });
};

module.exports = run;