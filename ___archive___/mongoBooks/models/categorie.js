const mongoose = require('mongoose');
const path = require ('path');

const { Schema } = mongoose;

const generalSchema = new Schema({
   name: {
      type: Schema.Types.String,
      maxlength: 100,
      required: true,
      index: true
   },
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