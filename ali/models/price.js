const mongoose = require('mongoose');
const path = require ('path');

const { Schema } = mongoose;

const generalSchema = new Schema({
   product: {
      type: Schema.Types.String,
      ref: 'product'
   },
   price: {
      type: Schema.Types.Number
   }
});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);

module.exports = model;
