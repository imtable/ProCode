const mongoose = require('mongoose');
require('../bin/runners/db')

const GeneralModel = require('../models/form');

const db = mongoose.connection;

const saveForm = async (name, description, sid) => {
  const exist = await GeneralModel.findOne({ userID: sid });
  if (exist) {
    await exist.update({ name, description });
    return;
  }

  const item = new GeneralModel;
  item.name = name;
  item.description = description;
  item.userID = sid;
  const doc = await item.save();
  console.log(doc._id);
}

const getFormBySid = async (sid) => {
  const data = await GeneralModel.find({ userID: sid });
  console.log(data);
  return data;
}

module.exports = {
  saveForm,
  getFormBySid
};