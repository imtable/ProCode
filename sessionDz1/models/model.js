const mongoose = require('mongoose');
const path = require('path');

const specificationsSchema = require('./schemas/specSchema');

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
      required: true
   },
   price: {
      type: Schema.Types.Number,
      index: true,
      required: true
   },
   specifications: {
      type: specificationsSchema
   },
   bio: {
      gender: {
         type: Schema.Types.String,
         enum: ['male', 'female', 'alien']
      },
      birthday: {
         type: Schema.Types.Date
      }
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