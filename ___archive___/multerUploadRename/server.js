const express = require('express');
const path = require('path');

const rootRoute = require('./routes/root.js');
const multerRoute = require('./routes/multer.js');

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.use('/', rootRoute);
server.use('/multer', multerRoute);

server.listen(8000);

// ДЗ 
// Лвл 1 делаем аплоад файла мультером
// лвл 2 делаем авлоад файла + в тойже форме есть поле ввода, где можно ввести некий айди. Файл будет сохранен с именем равным этому айди
// лвл 3 загрузить файл и сгенерировать помимо оригналаного файла, еще два такихже файла но в другом расщирении и один чернобелый. Придумать как это удобно хранить