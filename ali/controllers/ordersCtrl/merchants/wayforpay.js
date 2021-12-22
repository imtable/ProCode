const mongoose = require('mongoose');

const GeneralModel = require('../models/item');

const db = mongoose.connection;


const createOrder = async (data) => {
  const order = {};
  return order;
}

const checkConfirmResp = async (data) => {
  const result = false;
  return result;
}

module.exports = {
  createOrder,
  checkConfirmResp,
};
