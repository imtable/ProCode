const express = require('express');
const path = require('path');

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
   res.render('main')
});

server.listen(8000);

// Делаем сайт на експресе.У сайта есть полноценна хтмл страница, с цсс, жс браузерным и картинками. Хтмл должен рендериться через шаблонизатор. По желанию, можно добавить немного логики в шаблонизацию