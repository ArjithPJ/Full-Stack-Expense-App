const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-app', 'root', 'Arjith@2000', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
