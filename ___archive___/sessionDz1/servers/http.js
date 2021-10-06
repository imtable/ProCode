var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var MongoStore = require('connect-mongo');

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var chatRouter = require('../routes/chat');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(session({
  secret: 'poijklmnb',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/session',
  })
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat', chatRouter);


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

// 1. лвл. Делаем форму. Данные формы должны записаться в сессию 
// и при обновленнии страницы, должны отображатьса на этой страничке

// 2. лвл. Берем домашку с чатом. и имя пользователя записуем в сессии 
// и не спрашиваем второй раз, если пользователь обновит страницу
