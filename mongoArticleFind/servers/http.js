var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// homework lvl1
const mongoose = require('mongoose');
require('../bin/runners/web/mongodb')
const UserModel = require('../models/article');

mongoose.set('useFindAndModify', false);

const createArticle = async () => {
  const article = new UserModel;
  article.title = 'article2';
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

// createArticle();
// findArticle('article1');

// homework lvl2
const updateArticle = async () => {
  let doc = await UserModel.findOneAndUpdate(article, { text: 'new text2' });
}

updateArticle();
