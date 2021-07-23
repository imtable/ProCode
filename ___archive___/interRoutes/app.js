const express = require('express');
const path = require('path');

const server = express();
const bodyParser = require('body-parser').urlencoded({ extended: false });

server.get('/', (req, res) => {
   res.send('root');
});

server.get('/form', bodyParser, (req, res) => {
   const page = path.join(__dirname, 'index.html');
   
   res.sendFile(page);
});

server.post('/form', bodyParser, (req, res) => {
   req.app.set('formPageBody', req.body);

   res.redirect('/url');
});

server.get('/url', (req, res) => {
   const { inp1, inp2 } = res.app.get('formPageBody');
   console.log(inp1, inp2);

   res.send('succes');
});

server.listen(8000);

// лвл1. Создать роут в експресе. Роут отдает на фронт хтмл форму. Форма при отправке данных, отправляет их на другой роут, не тот с которого получили форму. Данные которые пришли с формы, вывести в консоль. Где лежат данные формы - гуглим
// лвл 2. Добавить к хтмл форме еще файл с жс. В этом файле, отправить форму на сервак, но уже аяксом
// лвл 3, для особых извращенцев, отправить и сохранить на сервак через форму файл