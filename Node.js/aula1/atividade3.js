/* Faça a adaptação do módulo operacoesBancarias, criando um novo arquivo chamado operacoesBancariasJson. Nele você usará o módulo fs para fazer a persistência dos dados no arquivo json. 
A função criar conta deverá adicionar a nova conta ao array de contas do atributo do json. 
As funções de depositar e sacar deverão fazer a alteração dos valores do saldo no objeto correto no arquivo json. 

** Dica: use o método find para arrays, de forma que consiga encontrar a conta pelo número :)*/

const fs = require('fs');
const operacoesBancarias = require('./operacoesBancarias');
const { stringify } = require('querystring');

fs.writeFileSync('./operacoesBancaria.json', stringify())




