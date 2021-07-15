const express = require('express');
const multer = require('multer');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
   res.render('task');
});

const upload = multer();

router.post('/', upload.none(), async (req, res) => {
   const inpId = req.body.inpId;
   // res.json({status: 'ok'});
   const idArr = inpId.split(',');

   const content = [];
   const getPlanet = idArr.map(async (id) => {
      const url = `https://swapi.dev/api/planets/${id}`;
      const { data } = await axios.get(url);
      // content.push(data);
   res.send(data);
   });
   // await Promise.all(getPlanet);
   // res.send(content);
});

module.exports = router;

