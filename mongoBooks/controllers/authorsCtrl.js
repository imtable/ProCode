const mongoose = require('mongoose');
require('../bin/runners/db')

const UserModel = require('../models/author');

const db = mongoose.connection;

const createAuthor = async (name, shortname) => {
  const article = new UserModel;
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
  let data = await UserModel.find().select('shortname');
  return data;
}

module.exports = {
  createAuthor,
  getAuthors,
};