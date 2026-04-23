//faça um objeto chamado contaBancaria, contabancaria deve conter os seguintes atributos: titular, saldo e tipoConta

//contaBancaria deve conter um método chamado depositar e sacar. Depositar e sacar devem receber um valor como parâmetro e atualizar o saldo da conta bancária, além de mostrar o novo saldo no console. O método sacar deve validar se o valor a ser sacado é menor ou igual ao saldo disponível, caso contrário, deve mostrar uma mensagem de erro no console.

//dica: para atualizar o saldo, utilize a palavra-chave this para acessar o atributo saldo do objeto contaBancaria e atualizar seu valor. 

let contaBancaria = {
    titular: "john",
    saldo: 20,
    tipoConta: "corrente",
    depositar: true,
    detalhar: function (){
        console.log(`titular: ${this.titular}`)
        console.log(`saldo: ${this.saldo}`)
        console.log(`tipo de conta: ${this.tipoConta}`)
        console.log(`depositar: ${this.tipoConta ? 'sim' : 'nao' }`)
    },
    depositar:function (valor){
        return valor + this.saldo
    },
    sacar: function(valor){
        if(valor > this.saldo){
            return `voçê esta tentando sacar uma quantia maior que seu saldo!`
        }else{
            return valor - this.saldo
        }
    }
}