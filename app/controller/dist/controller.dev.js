"use strict";

var db = require('../config/db.config.js');

var config = require('../config/config.js');

var User = db.user;
var Role = db.role;

var jwt = require('jsonwebtoken');

var bcrypt = require('bcryptjs');

var status;

exports.signup = function (req, res) {
  // Veritabanına kullanıcı kaydı
  console.log("Kayıt işlemi yapılıyor");
  console.log(req.body.roles);
  User.create({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  }).then(function (user) {
    Role.findAll({
      where: {
        name: req.body.roles
      }
    }).then(function (roles) {
      var token = jwt.sign({
        id: user.id
      }, config.secret, {
        expiresIn: 86400 // expires in 24 hours

      });
      user.setRoles(roles).then(function () {
        res.send({
          status: true,
          accessToken: token
        });
      });
    })["catch"](function (err) {
      console.log("object");
      res.status(500).send("Error -> " + err);
    });
  })["catch"](function (err) {
    res.status(500).send("Fail! Error -> " + err);
  });
};

exports.signin = function (req, res) {
  console.log("Giriş Yapılıyor...");
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(function (user) {
    // console.log(user);
    if (!user) {
      return res.status(400).send('Kullanıcı bulunamadı.');
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        status: false,
        accessToken: null,
        reason: "Invalid Password!"
      });
    }

    var token = jwt.sign({
      id: user.id
    }, config.secret, {
      expiresIn: 86400 // expires in 24 hours

    });
    res.status(200).send({
      status: true,
      accessToken: token
    });
  })["catch"](function (err) {
    res.status(500).send('Hata -> ' + err);
    console.log(err);
  });
};

exports.userContent = function (req, res) {
  User.findOne({
    where: {
      id: req.userId
    },
    attributes: ['name', 'surname', 'email'],
    include: [{
      model: Role,
      attributes: ['id', 'name'],
      through: {
        attributes: ['userId', 'roleId']
      }
    }]
  }).then(function (user) {
    res.status(200).json({
      "description": "Kullanıcı Sayfasına Hoş Geldiniz",
      "user": user
    });
  })["catch"](function (err) {
    res.status(500).json({
      "description": "Kullanıcı sayfasına erişiminiz yoktur.",
      "error": err
    });
  });
};

exports.adminBoard = function (req, res) {
  User.findOne({
    where: {
      id: req.userId
    },
    attributes: ['name', 'surname', 'email'],
    include: [{
      model: Role,
      attributes: ['id', 'name'],
      through: {
        attributes: ['userId', 'roleId']
      }
    }]
  }).then(function (user) {
    res.status(200).json({
      "description": "Admin Sayfasına Hoş Geldiniz",
      "user": user
    });
  })["catch"](function (err) {
    res.status(500).json({
      "description": "Admin sayfasına erişiminiz yoktur.",
      "error": err
    });
  });
};

exports.managementBoard = function (req, res) {
  User.findOne({
    where: {
      id: req.userId
    },
    attributes: ['name', 'surname', 'email'],
    include: [{
      model: Role,
      attributes: ['id', 'name'],
      through: {
        attributes: ['userId', 'roleId']
      }
    }]
  }).then(function (user) {
    res.status(200).json({
      "description": "Yönetim Paneli",
      "user": user
    });
  })["catch"](function (err) {
    res.status(500).json({
      "description": "Yönetim paneline erişiminiz yoktur.",
      "error": err
    });
  });
};