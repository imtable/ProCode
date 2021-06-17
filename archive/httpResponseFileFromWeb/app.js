const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
   console.log('request from browser');

   // lvl 1
   // const path = './file.html';
   // const readStream = fs.createReadStream(path);
   // readStream.pipe(res);
   // lvl 1

   const url = 'http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
   const getFile = () => {
      // res.setHeader("content-disposition", "attachment"); хедер для скачивания
      http.get(url, (result) => {
         result.pipe(res);
      });  
   };
   getFile();

}).listen(8000);

// Лвл 1. Поднять сервать на модуле хттп и попробовать получить на него запрос с браузера
// Лвл 2. Отправить в ответ файл на запрос
// Лвл 3. В ответ на запрос, запросить файл аяксом откудато с интернета(неважно какой) и отдать его в ответ на запрос.