const sequelize = require('./sequelize.js')

const {DataTypes} = require('sequelize')

/* id_produtor int AI PK 
nome varchar(100) 
endereco varchar(250) 
cidade varchar(50) 
uf char(2) */

const produtor = sequelize.define('produtor', {
    id_produtor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    uf: {
        type: DataTypes.CHAR(2),
        allowNull: false
    }
},
{
    tableName: 'produtor',
    timestamps: false
})

module.exports = produtor