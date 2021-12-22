const mongoose = require('mongoose');
const jws = require('jws');
const getKeys = require('./getKeys');

const GeneralModel = require('../../models/user');

const db = mongoose.connection;

const registerUser = async (login, pwd, name) => {
  // const exist = await GeneralModel.findOne({ 'auth.login': login });
  // if (exist) {
  //   console.log('User is already registered');
  //   return { status: 'user is already registered', login: exist.login };
  // }
  // лучше делать findOne, прежде чем сохранить док

  const item = new GeneralModel;
  item.auth.login = login;
  item.auth.pwd = pwd;
  item.name = name;

  try {
    const doc = await item.save();
    console.log('+ + + + success registration');
    return { status: 'success registration', payload: { userID: doc._id, login } };
  } catch (err) {
    console.log('= = = = reg error:', err.message);
    if (err.message.includes('dup key: { auth.login')) {
      return { status: 'reg error: this login is already taken'};
    }
    return { status: `unknown reg error: ${err.message}`};
  }
}

const newToken = async (payload) => {
  const privKey = await getKeys.getPrivKey();
  const token = jws.sign({
    header: { alg: 'RS256' },
    payload: payload,
    secret: privKey,
  });
  return token;
} 

const loginUser = async (login, pwd) => {
  const user = await GeneralModel.findOne({ 'auth.login': login });
    if (!user) {
    console.log('= = = = login error: user is not registered');
    return { status: 'login error: user is not registered' };
  }

  const isVerified = await user.verify(pwd);
  if (!isVerified) {
    console.log(`= = = = login error: wrong password to ${user.auth.login}`);
    return { status: `login error: wrong password to ${user.auth.login}`};
  }
  const payload = {
    userID: user._id,
    name: user.name,
  }

  const token = await newToken(payload);

  console.log(`+ + + + success login to ${user.auth.login}`);
  return { status: 'success login', payload: { token } };
}

const identifyUser = async (token) => {
  if (!token) {
    console.log('identify error: token is not received');
    return { status: 'identify error: no token in authCtrl' };
  }
  
  const signature = token.replace(/"/g, '');
  const pubKey = await getKeys.getPubKey();
  const verify = jws.verify(signature, 'RS256', pubKey);
  console.log('AYAYAYA', verify)

  if (!verify) {
    return { status: `identify error: token verification fail`};
  }

  console.log('success identify');
  return { status: `success identify`, payload: { refreshToken: 'not today  : )' } };
}

module.exports = {
  registerUser,
  loginUser,
  identifyUser
};