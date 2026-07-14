const sequelize = require('./sequelize')

const {DataTypes} = require('sequelize')

/* id_nf int AI PK 
numero_nf int 
data_nf date */

const notaFiscal = sequelize.define('exemplo',{
    id_nf: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    numero_nf: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_nf: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    tableName: 'nota_fiscal',
    timestamps: false
})

module.exports = notaFiscal