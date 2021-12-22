const mongoose = require('mongoose');
const wfpMerchant = require('./merchants/wayforpay');
const notificationCtrl = require('../notificationCtrl');
const shop = require('./shop');

const GeneralModel = require('../../models/order');


const merchants = {
  wfp: wfpMerchant
}

const createOrder = async (items, merchant, recipient) => {
  const merchant = merchants[merchantName];
  const dataForInvoice = { }; // data for invoice
  const invoice = merchant.createInvoice(dataForInvoice);

  const orderData = {
    items: items,
    invoices: [{
      provider: merchantName,
      data: invoice
    }],
    delivery
  };

  const order = await orderModel.create(orderData);

  notification.send(uid);

  return order;
}

const checkOrder = async (orderId) => {
  const order = {};
  return order;
}

const confirmPay = async (orderId) => {
  // const order = {};
  // return order;
}

const setStatus = async (status) => {
  // const order = {};
  // return order;
}

// для вывода всех заказов в профиле юзера
const getOrdersByUid = async (uid) => {
  const orders = [];
  return orders;
}


module.exports = {
  createOrder,
  checkOrder,
  getOrdersByUid,
  confirmPay,
};
