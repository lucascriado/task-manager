const Sequelize = require('sequelize');

const sequelize = new Sequelize('task', 'admin', 'Password1!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = { Sequelize, sequelize };

// CREATE DATABASE auth;
// CREATE USER 'admin'@'localhost' IDENTIFIED BY 'Password1!';
// GRANT ALL ON auth.* TO 'admin'@'localhost';
// FLUSH PRIVILEGES;