const express = require('express');
const path = require('path');

const rootRouter = require('./routes/root.js')
const taskRouter = require('./routes/task.js')

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.use('/', rootRouter);
server.use('/task', taskRouter);

server.listen(8000);