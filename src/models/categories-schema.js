'use strict';

const mongoose = require('mongoose');


//where did these key-value pairs come from? 
const categories = mongoose.Schema({

  name: { type:String, required:true },
  description: { type:String },
  displayed_name: { type:String},

});

module.exports = mongoose.model('categories', categories);
