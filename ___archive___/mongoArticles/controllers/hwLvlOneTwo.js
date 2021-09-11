const mongoose = require('mongoose');
require('../bin/runners/db')

const UserModel = require('../models/article');

const db = mongoose.connection;

// homework lvl1
const createArticle = async () => {
  const article = new UserModel;
  article.title = 'article060921_4';
  article.author = 'Kate';
  article.date = '2020-10-10';
  article.text = 'text';
  article.comments = 'comment';
  const doc = await article.save();
  console.log(doc._id);
}
const findArticle = async (title) => {
  let result = await UserModel.find({ 'title': `${title}` });
  console.log(result);
}

createArticle();
findArticle('article060921_4');

// homework lvl2
const updateArticle = async () => {
  let doc = await UserModel.findOneAndUpdate({ title: 'article2' }, { text: 'TEXTarticle060921' });
}
updateArticle();
