var express = require('express');
const multer = require('multer');
const jenresCtrl = require('../controllers/jenresCtrl');
const authorsCtrl = require('../controllers/authorsCtrl');
const booksCtrl = require('../controllers/booksCtrl');

var router = express.Router();

const upload = multer();

router.get('/', async function(req, res, next) {
  res.render('acp', { title: 'Express' });
});


router.get('/getInitData', async function(req, res, next) {
  const jenres = await jenresCtrl.getJenres();
  const authors = await authorsCtrl.getAuthors();
  res.send({ jenres, authors });
});

router.post('/createJenre', upload.none(), function(req, res, next) {
  const data = req.body;
  jenresCtrl.createJenre(data.inpJenre);
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
    data.inpBookName, data.inpBookYear, data.inpBookLocation, data.inpBookPublisher, data.selectBookAuthors, data.selectBookJenres);
  res.json({status: 'ok'});
});

module.exports = router;