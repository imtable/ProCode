const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');
const url = require('url');

const server = http.createServer((req, res) => {
   if(req.url === '/') {
      const filePath = './public/index.html';
      
      res.writeHead(200, {
         'Content-Type': 'text/html',
      });

      const readS = fs.createReadStream(filePath);
      readS.pipe(res);
   };
   if(req.url === '/js/browser.js') {
      const filePath = './public/js/browser.js';
      
      res.writeHead(200, {
         'Content-Type': 'application/javascript',
      });

      const readS = fs.createReadStream(filePath);
      readS.pipe(res);
   };

   if(req.url === '/newroute') {
      const filePath = './public/newroute.html';
      
      res.writeHead(200, {
         'Content-Type': 'text/html',
      });

      const readS = fs.createReadStream(filePath);
      readS.pipe(res);
   };
   if(req.url === '/js/browserNewRoute.js') {
      const filePath = './public/js/browserNewRoute.js';
      
      res.writeHead(200, {
         'Content-Type': 'application/javascript',
      });

      const readS = fs.createReadStream(filePath);
      readS.pipe(res);
   };
});

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

server.listen(8000, () => {
   console.log( (new Date().getMinutes()) + ':' + (new Date().getSeconds()) + ' HTTP server up' );
});