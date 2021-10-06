var express = require('express');
const multer = require('multer');

var router = express.Router();

const chatCtrl = require('../controllers/chatCtrl');

var router = express.Router();

const upload = multer();

router.get('/', async function(req, res, next) {
  console.log('sess ID:', req.sessionID)
  res.render('chat', { title: 'chat' });
});

router.get('/checkSID', async function(req, res, next) {
  const sid = req.sessionID;
  const user = await chatCtrl.checkSID(sid);
  res.send(user);
});

router.post('/regUser', upload.none(), async function(req, res) {
  const sid = req.sessionID, name = req.body.userForm_name;
  console.log('AYAYAYAYA', sid, name)
  await chatCtrl.registerUser(name, sid);
  res.json({ status: 'ok', payload: { } });
});

module.exports = router;
