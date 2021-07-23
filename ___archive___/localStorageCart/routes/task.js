const express = require('express');
const multer = require('multer');
const axios = require('axios');
const Ajv = require("ajv");

const router = express.Router();

router.get('/', (req, res) => {
   res.render('task');
});

const upload = multer();

router.post('/', upload.none(), (req, res) => {
   const data = req.body;

   const ajv = new Ajv();
   const schema = {
      type: 'object',
      properties: {
         inpName: { type: 'string', minLength: 5, maxLength: 55},
         inpAddress: { type: 'string', minLength: 22, maxLength: 120 },
      },
   };

   const validate = ajv.compile(schema);
   const valid = validate(data);
   if (!valid) {
      console.log(validate.errors);
      res.json({ status: 'invalid data', payload: { error: validate.errors } });
      return;
   };

   console.log(data);
   res.json({status: 'ok'});
});

module.exports = router;
