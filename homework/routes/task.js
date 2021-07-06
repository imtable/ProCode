const express = require('express');
const multer = require('multer');
const axios = require('axios');

const router = express.Router();
const upload = multer();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.none(), async function(req, res, next) {
  const id = req.body.inpPlanet.split(',');

  const content = [];
  const getPlanet = id.map(async (val) => {
    const url = `https://swapi.dev/api/planets/${val}`;
    const { data } = await axios.get(url);
    content.push(data);
  });
  await Promise.all(getPlanet);
  console.log('11111111111111:', content[0].name);

  res.send(content);
});

module.exports = router;
