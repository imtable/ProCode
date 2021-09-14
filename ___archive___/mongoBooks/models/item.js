const mongoose = require('mongoose');
const path = require ('path');

const specificationsSchema = require('./schemas/subSchema');

const { Schema } = mongoose;

const generalSchema = new Schema({
   name: {
      type: Schema.Types.String,
      maxlength: 100,
      index: true,
      required: true
   },
   picture: {
      type: Schema.Types.String
   },
   description: {
      type: Schema.Types.String,
      maxlength: 500,
      index: true,
      required: true
   },
   price: {
      type: Schema.Types.Number,
      required: true
   },
   specifications: {
      type: specificationsSchema
   },
   itemVersion: [{
      type: Schema.Types.ObjectId
    }],
   categories: [{
      type: Schema.Types.ObjectId, ref: 'categorie'
    }]
});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);

module.exports = model;

// // Товар:
// - картинка
// - описание
// - цена
// - харавтеристики
// - група товара (это варианты одного и тогоже товара)
// Товар может быть в нескольких категориях сразу