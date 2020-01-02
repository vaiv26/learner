var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
  res.send('Hello!! Our Company has the cars which will make people go WOOOOOW!')
})

app.get('/companies', function (req, res) {
   fs.readFile(  __dirname+ "/" + "database.json", 'utf8', function (err, data) {
      res.end( data );
   });
})

app.get('/companies/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "database.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["company" + req.params.id]
      res.end( JSON.stringify(user));
   });
})

app.get('/companies/:id/cars', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "database.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["company" + req.params.id ]
      res.end( JSON.stringify(user.cars));
   });
})

app.get('/companies/:id/cars/:idd', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "database.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["company" + req.params.id ]
      var number = user.cars
      let idd = req.params.idd
      var name = number["car" + idd]
      res.end( JSON.stringify(name));
   });
})
var server = app.listen(8081, function () {
   var port = server.address().port
   console.log("app listening at http://localhost:%s", port)
})

