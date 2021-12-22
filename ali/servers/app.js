const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');

const indexRouter = require('../routes/index');
const productsRouter = require('../routes/products');
const ordersRouter = require('../routes/orders');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// const { uri } = require('../config').db;
// app.use(session({
//   secret: 'poijklmnb',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false },
//   store: MongoStore.create({
//     mongoUrl: uri,
//   })
// }));

app.use('/api', indexRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
