const express = require('express');
const multer = require('multer');
const axios = require('axios');
const Ajv = require('ajv');
const addFormats = require("ajv-formats");

const router = express.Router();
const upload = multer();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.none(), (req, res) => {
  console.log('start task');
  const { body } = req;
  console.log({ body });

  const ajv = new Ajv();
  addFormats(ajv);

  const schema = {
    type: 'object',
    properties: {
      body: { 
        type: 'object',
        properties: {
          inpId: { type: 'string', minLength: 1, maxLength: 120},
          inpFirstName: { type: 'string' },
          inpLastName: { type: 'string' },
          inpEmail: { type: 'string', format: "email" },
          inpGender: { type: 'string', enum: ['male', 'female', 'alien'] },
          inpIpAdress: { type: 'string', format: "ipv4" }
        },
        additionalProperties: false
      }
    }
  };

  const validate = ajv.compile(schema);
  const valid = validate({ body });
  if (!valid) {
    console.log(validate.errors);
    res.json({ status: 'invalid data', payload: { error: validate.errors } });
    return;
  };

  res.json({ status: 'ok' });
});

module.exports = router;

// Дано поля формы
// id - строка 120 символов
// ​first_name - имя
// last_name  - фамилия
// email - имейл
// gender - пол male\female\alien
// ip_address - айпи адрес через точку

// Данные с формы отправляються на бек где их должен проверить AJV
// если все ок, отдать на фронт джейсон обьект { status: 'ok' }
// если есть ошибка валидации, отдать на фронт джейсон обьект 
// { status: 'invalid data', payload: { error: 'тут масив ошибок' } }