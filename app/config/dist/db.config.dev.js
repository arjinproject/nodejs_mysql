"use strict";

var env = require('./env.js');

var Sequelize = require('sequelize');

var sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  //   operatorsAliases: true, // eski sürümde vardı
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('../model/user.model.js')(sequelize, Sequelize);
db.role = require('../model/role.model.js')(sequelize, Sequelize);
db.car_driver = require('../model/car_driver.model.js')(sequelize, Sequelize);
db.message = require('../model/message.model.js')(sequelize, Sequelize);
db.car = require('../model/car.model.js')(sequelize, Sequelize);
db.driver = require('../model/driver.model.js')(sequelize, Sequelize);
db.participant = require('../model/participant.model.js')(sequelize, Sequelize);
db.user_driver = require('../model/user_driver.model.js')(sequelize, Sequelize);
db.institution = require('../model/institution.model.js')(sequelize, Sequelize);
db.chat = require('../model/chat.model.js')(sequelize, Sequelize);
db.admin = require('../model/admin.model.js')(sequelize, Sequelize);
db.job = require('../model/job.model.js')(sequelize, Sequelize);
db.user_roles = require('../model/user_roles.model')(sequelize, Sequelize);
db.location = require('../model/location.model')(sequelize, Sequelize);
db.driver_location = require('../model/driver_location.model')(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId'
});
db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId'
});
module.exports = db;