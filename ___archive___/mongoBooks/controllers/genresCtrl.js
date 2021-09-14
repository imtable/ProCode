const mongoose = require('mongoose');
require('../bin/runners/db')

const GenresModel = require('../models/genre');

const db = mongoose.connection;

const createGenre = async (name) => {
  const genre = new GenresModel;
  genre.name = name;
  // try {
    const doc = await genre.save();
    console.log(doc._id);
  // } catch (e) {
    // console.log('I AM CREATED ALREADY!');
    // return e;
  // }
}

const getGenres = async () => {
  let data = await GenresModel.find().select('name');
  return data;
}

module.exports = {
  createGenre,
  getGenres,
};