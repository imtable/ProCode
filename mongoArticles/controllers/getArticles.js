const mongoose = require('mongoose');
require('../bin/runners/db')

const UserModel = require('../models/article');

const db = mongoose.connection;

const getArticles = async () => {
  let data = await UserModel.find().select('title');
  return data;
}

module.exports = getArticles;

// const getArticles = async () => {
//   return new Promise(async (resolve, reject) => {
//     let data = await UserModel.find().select('title');
//     resolve(data);
//   });
// };

// module.exports = getArticles;

// dont upd
// let articles = [];
// const getArticles = () => {
//   let requestProm = new Promise(async (resolve, reject) => {
//       let data = await UserModel.find().select('title');
//       resolve(data);
//   });
//   requestProm.then(data => { articles.push(data) });
// };
// getArticles();
// module.exports = articles;