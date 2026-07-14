const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('loja', 'root', 'Tanzqwyw', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate()

.then(()=>{
    sequelize.sync({alter:true})
    console.log('servidor conectado com sucesso')
})
.catch((erro)=>{
    console.log(`erro ao conectar o servidor. ${erro}`)
})

module.exports = sequelize