var express = require('express');
const multer = require('multer');

var router = express.Router();

const upload = multer();

router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;