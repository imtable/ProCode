const express = require('express');
const router = express.Router();

router.get('/create', async (req, res, next) => {
  const { filters, startId } = req.body;

  const limit = 20;
  const products = await productsCtrl.getProducts(filters, startId, limit);
  res.json({ status: 'ok', payload: { products } });
});

module.exports = router;
