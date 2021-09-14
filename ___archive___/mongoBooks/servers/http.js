var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/acp');

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
app.use('/acp', usersRouter);

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

// ДЗ
// 1 лвл у одной книги есть один автор, жанров нет
// 2 лвл у одной книги есть один автор, и много жанров
// 3 лвл у одной книги есть много авторов, и много жанров
// 4. лвл. Реализовать фронт, который будет отображать список книг, с фильтрами.
// Возможные фильры:
// - автор (поле ввода имени автора
// - название книги(поле ввода названия книги)
// - жанр (выпадающий список, можно выдрать несколько

// ДЗ. 
// 1. лвл. реализуем страничку админки которая добавляет жанры. 
// И по аналогии, потом делаем так же, которая добавляет авторов.
// 2. лвл. реализуем страничку добавления книги
// 3. лвл. наслаждаемся результатом