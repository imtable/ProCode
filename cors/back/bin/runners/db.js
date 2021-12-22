const init = () => new Promise((resolve, reject) => {
  resolve(console.log('DB is not choosen'));
});

// __mongo
// const mongoose = require('mongoose');

// // const db = require('../../storage/db');
// const db = mongoose.connection;

// const { uri, options } = require('../../config').db.mongo;

// const init = () => new Promise((resolve, reject) => {
//    mongoose.connect(uri, options);
  
//    db.on('error', (err) => {
//       console.log('DB err', err);
//    });
//    db.once('open', () => {
//       console.log('Connected to DB');
//       resolve();
//    });
//    db.once('close', () => {
//       console.log('Close connection to DB');
//    });
// });

// __mysql
// const mysql = require('mysql');

// const options = require('../../config').db.mySql;

// const init = () => new Promise((resolve, reject) => {
//    const connection = mysql.createConnection({ ...options });
//    connection.connect();
  
//    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//    if (error) throw error;
//    console.log('MySQL: 1+1 is', results[0].solution);
//    });
  
//    // connection.end();
// });

module.exports = init;