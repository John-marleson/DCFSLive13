const { Sequelize } = require('sequelize')
require('dotenv').config({path: '../.env'})


const sequelize = new Sequelize(process.env.NOME_BANCO, process.env.NOME_USUARIO_BANCO, process.env.SENHA_BANCO, {host: process.env.HOST_BANCO, dialect: 'mysql', port: process.env.PORTA_BANCO, logging: true})

module.exports = sequelize;