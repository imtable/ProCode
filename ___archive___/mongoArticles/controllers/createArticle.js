const mongoose = require('mongoose');
require('../bin/runners/db')

const UserModel = require('../models/article');

const db = mongoose.connection;

const createArticle = async (title, author, text) => {
  const article = new UserModel;
  article.title = title;
  article.author = author;
  article.text = text;
  try {
    const doc = await article.save();
    console.log(doc._id);
  } catch (e) {
    console.log('I AM CREATED ALREADY!');
    // throw e;
  }
}

module.exports = createArticle;