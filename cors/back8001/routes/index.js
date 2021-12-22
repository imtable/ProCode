const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res, next) => {
  // res.sendFile(path.resolve(__dirname, '../public/build', 'index.html'));
});

router.get('/api', (req, res, next) => {
  res.json({ hello: 'from 8001' });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
