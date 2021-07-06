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
      content.push(data);
   });
   await Promise.all(getPlanet);
   res.send(content);
});

module.exports = router;

// Есть форма на фронте, в ней через 
// запятую вводим цифры ("1, 3, 4", например), 
// сплитом на сервере разбиваем на 
// отдельные цифры, со SWAPI получаем 
// планеты с соответствующим id, 
// ыводим на фронт в какой-то див.
// (Promise.all)