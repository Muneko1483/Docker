'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    name: String,
    age: String,
    email :String
  
});

module.exports = mongoose.model('Users', UserSchema);