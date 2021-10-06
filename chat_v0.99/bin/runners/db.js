const mongoose = require('mongoose');
const db = require('../../storage/db');

const { uri, options } = require('../../config').db;

const init = () => new Promise((resolve, reject) => {
   mongoose.connect(uri, options);
   
   db.on('error', (err) => {
      console.log('DB err');
      // log.info('BD ERR:', err);
   });
   db.once('open', () => {
      console.log('Connected to DB');
      // log.info('Connected to DB');
      resolve();
   });
   db.once('close', () => {
      console.log('Close connection to DB');
      // log.info('Close connection to DB');
   });
});

module.exports = init;