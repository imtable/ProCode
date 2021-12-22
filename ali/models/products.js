const mongoose = require('mongoose');
const path = require ('path');

const { Schema } = mongoose;

const generalSchema = new Schema({
   name: {
      type: Schema.Types.String,
   },
   atributes: {
      type: Schema.Types.Mixed,
   }
});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);

module.exports = model;
