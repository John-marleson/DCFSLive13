const sequelize = require('./sequelize.js')

const {DataTypes} = require('sequelize')

/* id_item int AI PK 
nome_item varchar(100) 
valor_unidade decimal(10,2) */

const itens = sequelize.define('item', {
    id_item: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_item: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    valor_unidade: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},
{
    tableName: 'item',
    timestamps: false
})

module.exports = itens