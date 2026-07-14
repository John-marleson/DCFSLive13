const itens = require('./modelos/ItensModel.js')
const produtor = require('./modelos/ProdutorModel.js')
const notaFiscal = require('./modelos/notaFiscalModel.js')
const vendas = require('./modelos/vendasModel.js')

/* olumns:
item_id int 
nf_id int 
produtor_id int 
quantidade int 
desconto int */

notaFiscal.create({
    numero_nf: 1002,
    data_nf: 2006-10-28
})
.then(()=>{
    console.log('item criado com sucesso!')
})
.catch((erro)=>{
    console.log(`erro ao criar o item. ${erro}`)
})