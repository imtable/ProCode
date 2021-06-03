const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
   console.log('request from browser');
   const path = './file.html';
   const stat = fs.statSync(path);
   
   const readStream = fs.createReadStream(path);
   readStream.pipe(res);
}).listen(8000);

// lvl3
// const axios = require('axios');
// const url = 'https://unsplash.com/photos/AaEQmoufHLk/download?force=true';
// let webFile = '';

// const getFile = () => {
//    axios.get(url).then((response) => {
//       webFile = response.data;
//       console.log(webFile);
//    });
//    return webFile;
// };
// getFile();
// lvl3

// Лвл 1. Поднять сервать на модуле хттп и попробовать получить на него запрос с браузера
// Лвл 2. Отправить в ответ файл на запрос
// Лвл 3. В ответ на запрос, запросить файл аяксом откудато с интернета(неважно какой) и отдать его в ответ на запрос.