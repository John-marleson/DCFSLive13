//Criação do Sistema Bancário do Banco do Cleitinho

//Super Classe : Conta Bancária
/* Atributos:
- #titular
- #numero
- #saldo

Métodos:
- depositar
- sacar

- mostrarDetalhes

- getTitular
- setTitular
- getSaldo
- setSaldo
- getTitular
- getNumero
*/

class ContaBancaria{
    #titular;
    #numero;
    #saldo;

    constructor(titular, numero, saldo){
        this.#titular = titular;
        this.#numero = numero;
        this.#saldo = saldo;
    }

    depositar(valor){
        if(valor <= 0 || isNaN(valor)){
            return 'o valor não pode ser negativo e deve ser maior que zero'
        }
        this.#saldo += valor
        return this.#saldo
    }

    sacar(valor){
        if(valor <= 0 || isNaN(valor)){
            throw new Error('o valor não pode ser negativo e deve ser maior que zero')
        }
        if(valor > this.#saldo){
            throw new Error('o valor não pode ser maior que o saldo em conta')
        }
        return this.#saldo - valor
    }

    mostrarDetalhes(){
        console.log(`titular: ${this.titular}, numero: ${this.#numero}, saldo: ${this.#saldo}`)
    }

    getT
}


//Classes filhas que herdam de ContaBancária
//Conta Corrente
/* Atributos:
- #limiteChequeEspecial
- #dividaChequeEspecial

Métodos:
- getLimiteChequeEspecial
- setLimiteChequeEspecial
- transferir

- saque (polimorfismo) -> caso o saldo seja maior que o valor do saque, ele realiza o saque, caso contrário, ele realiza o saque com o cheque especial
-caso o saldo + cheque especial seja menor que o valor do saque, ele levanta um erro

- mostrarDetalhes(polimorfismo) incluindo o cheque especial e a divida nesse detalhe
*/

//Conta Poupança
//Atributos:
//Taxa de Juros

//Métodos:
//getTaxaJuros
//setTaxaJuros
//mostrarDetalhes(polimorfismo)-> incluindo a taxa de juros

//Conta Salario
//atribuitos: empresa

//metodos:
//mostrarDetalhes(polimorfismo)-> incluindo a empresa
//getEmpresa e setEmpresa