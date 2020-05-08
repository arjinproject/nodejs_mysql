"use strict";

module.exports = function (sequelize, Sequelize) {
  var notes = sequelize.define('notes', {
    driverId: {
      type: Sequelize.INTEGER
    },
    adminId: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    detail: {
      type: Sequelize.STRING
    }
  });
  return notes;
};