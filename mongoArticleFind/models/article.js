const mongoose = require('mongoose');

const { Schema } = mongoose;

const generalSchema = new Schema({
   title: {
      type: Schema.Types.String,
      maxlength: 255,
      unique: true,
      // require: true
   },
   author: {
      type: Schema.Types.String,
      maxlength: 255,
      // require: true
   },
   date: {
      type: Schema.Types.Date,
   },
   text: {
      type: Schema.Types.String,
      // require: true
   },
   comments: [{ 
      type: Schema.Types.String,
      maxlength: 555
   }],
});

const model = mongoose.model('article', generalSchema)
module.exports = model;