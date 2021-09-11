const mongoose = require('mongoose');
const path = require('path');

const { Schema } = mongoose;

const generalSchema = new Schema({
   name: {
      type: Schema.Types.String,
      maxlength: 255,
      unique: true,
   },
   publish: {
      year: {
         type: Schema.Types.String,
      },
      location: {
         type: Schema.Types.String,
      },
      publisher: {
         type: Schema.Types.String,
      },
   },
   authors: [{ 
      type: Schema.Types.ObjectId, ref: 'author',
   }],
   jenres: [{ 
      type: Schema.Types.ObjectId, ref: 'jenre',
   }],
});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);

module.exports = model;