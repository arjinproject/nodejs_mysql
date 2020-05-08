"use strict";var status,db=require("../config/db.config.js"),config=require("../config/config.js"),User=db.user,Role=db.role,jwt=require("jsonwebtoken"),bcrypt=require("bcryptjs");exports.signup=function(e,t){console.log("Kayıt işlemi yapılıyor"),console.log(e.body.roles),User.create({name:e.body.name,surname:e.body.surname,email:e.body.email,password:bcrypt.hashSync(e.body.password,8)}).then(function(s){Role.findAll({where:{name:e.body.roles}}).then(function(e){var n=jwt.sign({id:s.id},config.secret,{expiresIn:86400});s.setRoles(e).then(function(){t.send({status:!0,accessToken:n})})}).catch(function(e){console.log("object"),t.status(500).send("Error -> "+e)})}).catch(function(e){t.status(500).send("Fail! Error -> "+e)})},exports.signin=function(s,t){console.log("Giriş Yapılıyor..."),User.findOne({where:{email:s.body.email}}).then(function(e){if(!e)return t.status(400).send("Kullanıcı bulunamadı.");if(!bcrypt.compareSync(s.body.password,e.password))return t.status(401).send({status:!1,accessToken:null,reason:"Invalid Password!"});var n=jwt.sign({id:e.id},config.secret,{expiresIn:86400});t.status(200).send({status:!0,accessToken:n})}).catch(function(e){t.status(500).send("Hata -> "+e),console.log(e)})},exports.userContent=function(e,n){User.findOne({where:{id:e.userId},attributes:["name","surname","email"],include:[{model:Role,attributes:["id","name"],through:{attributes:["userId","roleId"]}}]}).then(function(e){n.status(200).json({description:"Kullanıcı Sayfasına Hoş Geldiniz",user:e})}).catch(function(e){n.status(500).json({description:"Kullanıcı sayfasına erişiminiz yoktur.",error:e})})},exports.adminBoard=function(e,n){User.findOne({where:{id:e.userId},attributes:["name","surname","email"],include:[{model:Role,attributes:["id","name"],through:{attributes:["userId","roleId"]}}]}).then(function(e){n.status(200).json({description:"Admin Sayfasına Hoş Geldiniz",user:e})}).catch(function(e){n.status(500).json({description:"Admin sayfasına erişiminiz yoktur.",error:e})})},exports.managementBoard=function(e,n){User.findOne({where:{id:e.userId},attributes:["name","surname","email"],include:[{model:Role,attributes:["id","name"],through:{attributes:["userId","roleId"]}}]}).then(function(e){n.status(200).json({description:"Yönetim Paneli",user:e})}).catch(function(e){n.status(500).json({description:"Yönetim paneline erişiminiz yoktur.",error:e})})};