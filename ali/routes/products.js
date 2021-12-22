const express = require('express');
const productsCtrl = require('../controllers/productsCtrl');

const router = express.Router();


router.get('/getList', async (req, res, next) => {
  const { filters, startId } = req.query;

  const limit = 20;
  const products = await productsCtrl.getProducts(filters, startId, limit);
  res.json({ status: 'ok', payload: { items } });
});

router.get('/search', async (req, res, next) => {
  const { text } = req.query;

  const limit = 40;
  const products = await productsCtrl.searchProducts(text, limit);
  res.json({ status: 'ok', payload: { items } });
});

module.exports = router;
