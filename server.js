//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Pdf = require('./model/pdf');
var dotenv = require('dotenv');
//and create our instances
var app = express();
var router = express.Router();

///LOAD ENV VARIABLES
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'Backend Initialized: Start building me!'});
});

router.get('/pdf/:id', function(req, res) {
//looks at our Comment Schema
Pdf.findOne({"path": req.params.id},function(err, pdf){

 if (err)
 res.send(err);
 //responds with a json object of our database comments.
 res.json(pdf)
 });
});

 //post new PDF to the database
router.route('/pdf')
 .post(function(req, res) {
 var pdf = new Pdf();
 //body parser lets us use the req.body
 pdf.path = req.body.path;
 pdf.source = req.body.source;
pdf.save(function(err) {
 if (err)
 res.send(err);
 res.json({ message: 'PDF source successfully added!' });
 });
 });


app.use('/', router);
app.use(express.static('public'));
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});

//MONGODB CONFIG
mongoose.connect(process.env.DB);
