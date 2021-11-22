var express = require('express');
const multer = require('multer');

const authCtrl = require('../controllers/authCtrl');
const identifyMw = require('../mw/identifyMw');

var router = express.Router();
const upload = multer();

router.all('/*', identifyMw);

router.get('/', async function(req, res, next) {
  res.render('index');
});

router.get('/userIdentify', async function(req, res, next) {
  res.json(req.dearUser);
});

router.post('/userReg', upload.none(), async function(req, res) {
  const login = req.body.userForm_login, pwd = req.body.userForm_pwd, name = req.body.userForm_name;
  
  const user = await authCtrl.registerUser(login, pwd, name);
  if (!user.payload) {
    res.json(user);
    return;
  }
  console.log('* * * * new user:', user.payload.login);
  req.session.userID = user.payload.userID;
  res.json({ status: user.status });
});

router.post('/userLogin', upload.none(), async function(req, res) {
  const login = req.body.userForm_login, pwd = req.body.userForm_pwd;
  
  const user = await authCtrl.loginUser(login, pwd);
  if (!user.payload) {
    res.json(user);
    return;
  }
  req.session.userID = user.payload.profile.userID;
  res.json(user);
});

router.get('/userLogout', async function(req, res, next) {
  const userName = req.dearUser.payload.profile.name;
    delete(req.session.userID);
  if (!req.session.userID) {
    console.log(`user ${userName} is logout`);
    res.json({ status: `user ${userName} logout success` });
  }
});

module.exports = router;
