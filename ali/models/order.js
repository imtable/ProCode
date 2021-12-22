const mongoose = require('mongoose');
const path = require ('path');

const { Schema } = mongoose;

const generalSchema = new Schema({
   items: [{
      product: { type: Schema.Types.ObjectId, ref: 'product' },
      count: { type: Schema.Types.Number }
   }],
   price: [{ 
      name: { type: Schema.Types.String },
      createAt: { type: Schema.Types.Date, default: Date.now },
      data: { type: Schema.Types.Mixed }
   }],
   delivery: { 
      provider: { type: Schema.Types.String },
      recipient: { 
         name: { type: Schema.Types.String },
         surname: { type: Schema.Types.String },
         email: { type: Schema.Types.String },
         phone: { type: Schema.Types.String }
      },
      data: { type: Schema.Types.Mixed }
   },
   payed: { type: Schema.Types.Boolean, default: false },
   status: { 
      type: Schema.Types.String,
      enum: [ 'created', 'accepted', 'inwork', 'delivering', 'done'],
      default: 'create'
   },
});

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);

module.exports = model;
