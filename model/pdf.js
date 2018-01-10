//Placeholder model for mongodb
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var PdfSchema = new Schema({
 path: String,
 source: String
});

//export our module to use in server.js
module.exports = mongoose.model('Pdf', PdfSchema);