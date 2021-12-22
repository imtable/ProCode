// const mongoose = require('mongoose');

const GeneralModel = require('../models/products');


const getProducts = async (filters, startId = null, limit = 0) => {
  const products = [];
  return products;
}

const searchProducts = async (text, limit = 0) => {
  return getProducts({ name: text }, limit);
}

// methods for admin panel (not impements)
const addProducts = async (data) => {
  const productId = null;
  return productId;
}

const removeProducts = async (id) => {
  return null;
}

const editProducts = async (id, data) => {
  return null;
}
// 


const createItem = async (data) => {
  const item = new GeneralModel;

  for (let key in data) {
    if (key.includes('spec')) {
      let fieldName = key.replace('spec_', '');
      item.specifications[fieldName] = data[key];
    } else {
      item[key] = data[key];
    }
  }

  try {
    const doc = await item.save();
    console.log(doc._id);
    return doc._id;
  } catch (e) {
    console.log('Saving error===');
    return e;
  }
}

const updateItemVersions = async (itemId, itemVersionId) => {
  GeneralModel.findOneAndUpdate({ _id: itemId }, { $push: { itemVersions: itemVersionId } },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
      }
  });
}

const getProductsByCategorieId = async (catId) => {
  const items = await GeneralModel.find({ categories: catId });
  if (!items) {
    console.log('= = = = get error: items is not finded');
    return { status: 'get error: items is not finded' };
  }

  console.log(`+ + + + success get items`);
  return { status: 'success', payload: { items } };
}

const getItemById = async (id) => {
  const item = await GeneralModel.findOne({ _id: id });
  if (!item) {
    console.log('= = = = get error: item is not finded');
    return { status: 'get error: item is not finded' };
  }

  console.log(`+ + + + success get item`);
  return { status: 'success', payload: { item } };
}

module.exports = {
  getProducts,
  searchProducts,
};
