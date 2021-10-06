const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');

const { Schema } = mongoose;

const generalSchema = new Schema({
   name: {
      type: Schema.Types.String,
      maxlength: 100,
      index: true,
   },
   auth: {
      login: { type: Schema.Types.String, require: true, unique: true, index: true, maxlength: 33 },
      hashedPwd: { type: Schema.Types.String, require: true, index: true, maxlength: 111 }
   }
});

const hashingPwd = (val) => {     
   const data = new TextEncoder().encode(val);     
   const result = crypto.createHash('sha256').update(data).digest('hex');     
   return result; }

generalSchema.virtual('auth.pwd')
   .get(function() {
      const field = this.auth.hashedPwd;
      return field;
   })
   .set(function(pwd) {
      const hash = hashingPwd(pwd);
      this.auth.hashedPwd = hash;
   });

generalSchema.methods.verify = async function(pwd) {
   const hashedPwd = hashingPwd(pwd);
   const userPwd = this.auth.hashedPwd;
   const isVerified = hashedPwd === userPwd;
   return isVerified;
}

const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);

module.exports = model;