'use strict';
// main model file
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname +
	'/../config/config.json');
const db = {};
const CampanaCRM = require('./CampanaCRM');


let sequelize;

sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.campanaCRM1 = CampanaCRM(sequelize, Sequelize);
module.exports = db;
