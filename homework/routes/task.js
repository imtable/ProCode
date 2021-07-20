const express = require('express');
const multer = require('multer');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
   res.render('task');
});

const upload = multer();

router.post('/', upload.none(), async (req, res) => {
   const data = req.body;
   console.log(data);

   res.json({status: 'ok'});
});

module.exports = router;

// const ajv = new Ajv();
// addFormats(ajv);

// const schema = {
//    type: 'object',
//    properties: {
//       inpName: { type: 'string', minLength: 5, maxLength: 55},
//       inpAddress: { type: 'string', minLength: 22, maxLength: 120 },
//    },
// };

// const validate = ajv.compile(schema);
// const valid = validate({ data });
// if (!valid) {
//    console.log(validate.errors);
//    res.json({ status: 'invalid data', payload: { error: validate.errors } });
//    return;
// };

// router.post('/', upload.none(), async (req, res) => {
//    const inpId = req.body.inpId;
//    // res.json({status: 'ok'});
//    const idArr = inpId.split(',');

//    const content = [];
//    const getPlanet = idArr.map(async (id) => {
//       const url = `https://swapi.dev/api/planets/${id}`;
//       const { data } = await axios.get(url);
//       content.push(data);
//    });
//    await Promise.all(getPlanet);
//    res.send(content);
// });

module.exports = router;
