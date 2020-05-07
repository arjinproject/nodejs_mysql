"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: false
}));

require('./app/router/router.js')(app);

var db = require('./app/config/db.config.js');

var Role = db.role; // force: true will drop the table if it already exists

db.sequelize.sync({
  force: true
}).then(function () {
  console.log('Drop and Resync with { force: true }');
  initial();
}); //require('./app/route/project.route.js')(app);
// Create a Server

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

function initial() {
  Role.create({
    id: 1,
    name: "USER"
  });
  Role.create({
    id: 2,
    name: "ADMIN"
  });
}