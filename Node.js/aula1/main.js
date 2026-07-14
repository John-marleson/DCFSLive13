const operacoesBancarias = require('./operacoesBancarias')

const conta1 = operacoesBancarias.conta('john', 'agencia', 'numero', 200)



/* console.log(operacoesBancarias.depositar(conta1, 100))
console.log(operacoesBancarias.sacar(conta1, 20))
console.log(operacoesBancarias.extrato(conta1)) */

/* const fs = require('fs')
const codificacao = 'uft8'
const textoAqui = 'ola'

fs.readFile('arquivo1.txt', codificacao, (err, textoAqui)=>{{console.log(textoAqui)}
}) */