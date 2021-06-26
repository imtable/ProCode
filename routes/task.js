const express = require('express');

const router = express.Router();

const articles = [
   { id: 'a1', title: 'article1', content: 'some text 1' },
   { id: 'a2', title: 'article2', content: 'some text 2' },
   { id: 'a3', title: 'article3', content: 'some text 3' }
];

router.get('/list', (req, res) => {
   const articlesList = articles.map(val => {
      return { id: val.id, title: val.title };
   });
   res.json({
      status: 'ok',
      result: {
         list: articlesList
      }
   });
});

router.get('/:id', (req, res) => {
   const { id } = req.params;
   const selectedArticle = articles.find(val => val.id === id);
   if (!selectedArticle) {
      res.json({
         status: 'not found'
      });
      return;
   }
   res.json({
      status: 'ok',
      result: { selectedArticle }
   });
});

module.exports = router;