// const sio = require('socket.io');

const run = (server) => {
  const io = sio(server);

  io.on('connection', (socket) => {
    console.log(`Connection ID: ${socket.id}`);
    
    socket.on('msgReq', (data, cb) => {
      console.log(data);
      // cb('msg received');
      io.emit('msgRes', {userName: data.userName, msg: data.msg});
    });

    socket.on('typingReq', (data) => {
      io.emit('typingRes', data );
    });

    socket.on('disconnect', () => {
      console.log(`Disconnection ID: ${socket.id}`);
    });
  });
};

module.exports = run;