var express = require('express');
const multer = require('multer');

var router = express.Router();

const formCtrl = require('../controllers/formCtrl');

var router = express.Router();

const upload = multer();

router.get('/', async function(req, res, next) {
  console.log(req.sessionID)
  res.render('index', { title: 'session' });
});

router.get('/getForm', async function(req, res, next) {
  const sid = req.sessionID;
  const form = await formCtrl.getFormBySid(sid);
  res.send({ form });
});

router.post('/postForm', upload.none(), async function(req, res) {
  const sid = req.sessionID, name = req.body.name, description = req.body.description;
  await formCtrl.saveForm(name, description, sid);
  res.json({ status: 'ok', payload: { } });
});

module.exports = router;

// 1. лвл. Делаем форму. Данные формы должны записаться в сессию 
// и при обновленнии страницы, должны отображатьса на этой страничке

// 2. лвл. Берем домашку с чатом. и имя пользователя записуем в сессии 
// и не спрашиваем второй раз, если пользователь обновит страницу
