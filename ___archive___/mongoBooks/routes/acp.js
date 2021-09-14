var express = require('express');
const multer = require('multer');

const genresCtrl = require('../controllers/genresCtrl');
const authorsCtrl = require('../controllers/authorsCtrl');
const booksCtrl = require('../controllers/booksCtrl');

var router = express.Router();

const upload = multer();

router.get('/', async function(req, res, next) {
  res.render('acp', { title: 'Express' });
});


router.get('/getInitData', async function(req, res, next) {
  const genres = await genresCtrl.getGenres();
  const authors = await authorsCtrl.getAuthors();
  res.send({ genres, authors });
});

router.post('/createGenre', upload.none(), function(req, res, next) {
  const data = req.body;
  genresCtrl.createGenre(data.inpGenre);
  res.json({status: 'ok'});
});

router.post('/createAuthor', upload.none(), function(req, res, next) {
  const data = req.body;
  authorsCtrl.createAuthor(data.inpAuthorName, data.inpAuthorShortname);
  res.json({status: 'ok'});
});

router.post('/createBook', upload.none(), function(req, res, next) {
  const data = req.body;
  console.log(data)
  booksCtrl.createBook(
    data.inpBookName, data.inpBookYear, data.inpBookLocation, data.inpBookPublisher, data.selectBookAuthors, data.selectBookGenres);
  res.json({status: 'ok'});
});

module.exports = router;