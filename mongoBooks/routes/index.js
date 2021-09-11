var express = require('express');
const multer = require('multer');
const createArticle = require('../controllers/jenresCtrl');

var router = express.Router();

const upload = multer();

router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getArticles', async function(req, res, next) {
  const articles = await getArticles();
  res.send(articles);
});

router.post('/', upload.none(), function(req, res, next) {
  const data = req.body;
  createArticle(data.inpTitle, data.inpAuthor, data.inpText);
  res.json({status: 'ok'});
});

module.exports = router;