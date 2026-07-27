const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('usuarios_lf13', 'root', 'Tanzqwyw', {host: 'localhost', dialect: 'mysql', port: 3306, logging: false})

module.exports = sequelize;