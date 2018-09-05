var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/Model'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.connect('mongodb://mongo-database:27017/tododb',{ useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/Routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });