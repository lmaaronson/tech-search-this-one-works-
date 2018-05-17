'use strict'

module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        title: { type: Sequelize.STRING, notEmpty: true },
        notes: { type: Sequelize.STRING, notEmpty: true },
    
    });

    return User;
  }