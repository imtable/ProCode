const mongoose = require('mongoose');
require('../bin/runners/db')

const BookModel = require('../models/book');

const db = mongoose.connection;

const createBook = async (name, year, loc, publisher, authors, jenres) => {
  const book = new BookModel;
  book.name = name;
  book.publish.year = year;
  book.publish.location = loc;
  book.publish.publisher = publisher;
  book.authors = authors;
  book.jenres = jenres;
  // try {
    const doc = await book.save();
    console.log(doc._id);
  // } catch (e) {
    // console.log('I AM CREATED ALREADY!');
    // return e;
  // }
}

const selectData = async () => {
  let data = await BookModel.find({name: 'mnb'}).select('authors').select('name');
  return data;
}
const populateData = async () => {
  let data = await BookModel.find({name: 'mnb'}).populate('authors').populate('jenres');
  return data;
}
const run = async () => {
  const dataSel = await selectData();
  console.log('111', dataSel);

  const dataPop = await populateData();
  const authors = dataPop.map(val => {
    console.log('AYAYAYA', val)
  })
  // console.log('222', dataPop);
}
run();

module.exports = {
  createBook
};