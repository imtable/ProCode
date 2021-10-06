const mongoose = require('mongoose');
const path = require('path');

const { Schema } = mongoose;

const generalSchema = new Schema({
   name: {
      type: Schema.Types.String,
      maxlength: 100,
      index: true,
      required: true
   },
   description: {
      type: Schema.Types.String,
      maxlength: 500,
      index: true,
   },
   userID: {
      type: Schema.Types.String,
      index: true,
      required: true,
      unique: true
   },
});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);

module.exports = model;