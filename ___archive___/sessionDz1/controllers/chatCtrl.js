const mongoose = require('mongoose');
require('../bin/runners/db')

const GeneralModel = require('../models/chatUser');

const db = mongoose.connection;

const registerUser = async (name, sid) => {
  const exist = await GeneralModel.findOne({ userID: sid });
  if (exist) {
    await exist.update({ name });
    return;
  }

  const item = new GeneralModel;
  item.name = name;
  item.userID = sid;
  const doc = await item.save();
  console.log(doc._id);
}

const checkSID = async (sid) => {
  let data = await GeneralModel.find({ userID: sid });
  if (data == false) {
    return 'user not registered';
  }
  return data;
}

module.exports = {
  registerUser,
  checkSID
};