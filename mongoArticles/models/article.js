const mongoose = require('mongoose');
const path = require('path');

const { Schema } = mongoose;

const generalSchema = new Schema({
   title: {
      type: Schema.Types.String,
      maxlength: 255,
      unique: true,
   },
   author: {
      type: Schema.Types.String,
      maxlength: 255,
   },
   text: {
      type: Schema.Types.String,
   },
   comments: [{ 
      type: Schema.Types.String,
      maxlength: 555
   }],
});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);

module.exports = model;