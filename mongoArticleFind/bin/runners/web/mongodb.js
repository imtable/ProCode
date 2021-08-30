const mongoose = require('mongoose');

const run = () => {
  const url = 'mongodb://localhost:27017/mongodz1';
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  };
  
  mongoose.connect(url, options);
  const db = mongoose.connection;
  
  db.on('error', (err) => {
    console.log('DB err');
  });
  db.once('open', () => {
    console.log('Connected to DB');
  });
  db.once('close', () => {
    console.log('Close connection to DB');
  });
}

module.exports = run;

// лвл 1.
// Создать коллекцию, которая будет описывать статью. 
// Добавить с помощью кода несколько статей в коллекцию (2-3). 
// Написать функцию, которая по найванию статьи, 
// будет находить ее в бд и выводить в консоль. 
// Статьи с одинакомывами названиями 
// не допустать(запретить дубликаты в настройке модели)
// лвл 2.
// найти статью функцией поиска с предыдущего лвла 
// и поменять текст статьи
// лвл 3.
// поднять веб сервер. Нарисовать форму ввода 
// и создавыать через нее статьи. Над формой ввода 
// показывать заголовки уже созданых статтей