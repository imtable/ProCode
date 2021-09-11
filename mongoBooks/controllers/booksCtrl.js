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

module.exports = {
  createBook
};