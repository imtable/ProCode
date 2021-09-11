const mongoose = require('mongoose');
require('../bin/runners/db')

const AuthorsModel = require('../models/author');

const db = mongoose.connection;

const createAuthor = async (name, shortname) => {
  const article = new AuthorsModel;
  article.name = name;
  article.shortname = shortname;
  // try {
    const doc = await article.save();
    console.log(doc._id);
  // } catch (e) {
    // console.log('I AM CREATED ALREADY!');
    // return e;
  // }
}

const getAuthors = async () => {
  let data = await AuthorsModel.find().select('shortname');
  return data;
}

module.exports = {
  createAuthor,
  getAuthors,
};