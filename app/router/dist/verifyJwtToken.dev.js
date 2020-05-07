"use strict";

var jwt = require('jsonwebtoken');

var config = require('../config/config.js');

var db = require('../config/db.config.js');

var Role = db.role;
var User = db.user;

verifyToken = function verifyToken(req, res, next) {
  var token = req.headers['x-access-token']; //   console.log(req.headers["x-access-token"]);

  if (!token) {
    return res.status(403).send({
      auth: false,
      message: 'Geçersiz token...'
    });
  }

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: 'İşlem başarısız. Hata -> ' + err
      });
    }

    req.userId = decoded.id;
    next();
  });
};

isAdmin = function isAdmin(req, res, next) {
  var token = req.headers['x-access-token'];
  console.log(req.userId);
  User.findByPk(req.userId).then(function (user) {
    console.log(req.userId);
    user.getRoles().then(function (roles) {
      for (var i = 0; i < roles.length; i++) {
        console.log(roles[i].name);

        if (roles[i].name.toUpperCase() === "ADMIN") {
          console.log(roles[i].name);
          next();
          return;
        }
      }

      return res.status(403).send("Admin rolü gerekli!");
    });
  });
};

var authJwt = {};
authJwt.verifyToken = verifyToken;
authJwt.isAdmin = isAdmin;
module.exports = authJwt;