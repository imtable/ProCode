const express = require('express');
const path = require('path');

const rootRouter = require('./routes/root.js');
const taskRouter = require('./routes/task.js');
const taskCartRouter = require('./routes/taskCart.js');

const server = express();

server.set('views', './views');
server.set('view engine', 'ejs');

server.use(express.static('./public'));

server.use('/', rootRouter);
server.use('/task', taskRouter);
server.use('/taskCart', taskCartRouter);

server.listen(3000);