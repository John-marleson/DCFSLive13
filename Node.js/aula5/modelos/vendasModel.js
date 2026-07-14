const itens = require('./ItensModel.js')
const notaFiscal = require('./notaFiscalModel.js')
const produtor = require('./ProdutorModel.js')
const sequelize = require('./sequelize.js')
const {DataTypes} = require('sequelize')

/* 
Columns:
item_id int 
nf_id int 
produtor_id int 
quantidade int 
desconto int 
*/

const vendasDb = sequelize.define('vendas', {
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: itens,
            key: 'id_item'
        }
    },
    nf_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: notaFiscal,
            key: 'id_nf'
        }
    },
    produtor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: produtor,
            key: 'id_produtor'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    desconto: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
},
{
    tableName: 'vendas',
    timestamps: false
})


module.exports = vendasDb;