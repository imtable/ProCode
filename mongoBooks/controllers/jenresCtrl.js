const mongoose = require('mongoose');
require('../bin/runners/db')

const JenresModel = require('../models/jenre');

const db = mongoose.connection;

const createJenre = async (name) => {
  const article = new JenresModel;
  article.name = name;
  // try {
    const doc = await article.save();
    console.log(doc._id);
  // } catch (e) {
    // console.log('I AM CREATED ALREADY!');
    // return e;
  // }
}

const getJenres = async () => {
  let data = await JenresModel.find().select('name');
  return data;
}

module.exports = {
  createJenre,
  getJenres,
};