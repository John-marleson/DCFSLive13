class contaBancaria{
    #numero;
    #saldo;
    #status;

    constructor(titular, numero, saldo = 0,){
        this.titular = titular;
        this.#numero = numero;
        this.#saldo = saldo;
    }

    getSaldo(){
        return this.#saldo
    }

    setSaldo(saldo){
        return this.#saldo = saldo
    }

    sacar(valor){
        if(valor <= 0 || this.#saldo < valor){
            throw new Error('o valor de saque deve ser maior que 0 e menor que o saldo em conta')
        }
        
        return this.#saldo - valor
    }
    
    depositar(valor){
        if(valor <= 0){
            throw new Error('o valor de deposito não pode ser menor que 0')
        }
        return this.#saldo += valor
    }

    consultarSaldo(){
        return this.#saldo;
    }
}

const conta1 = new contaBancaria('john', '802298922')

console.log(conta1.depositar(60))
console.log(conta1.consultarSaldo())
console.log(conta1.sacar(12))

//Crie a classe AgenciaBancaria que gerencie as contas bancárias. 
//A classe deve ter um atributo para armazenar a lista de contas bancárias e ele será privado
//deverá ter um atributo endereco, gerente, telefone e numeroAgencia
//deverá conter também um atributo com a quantidade de contas ativas

//para os métodos a classe deverá ter os seguintes métodos:
//adicionarConta(conta) - deverá aceitar apenas objetos da classe ContaBancaria
//removerConta(conta) - deverá verficar se a conta existe, se tem saldo e caso tenha saldo deverá indicar que deve ser feito o saque antes de remover a conta
//buscarContaPorNumero(numero) -> deverá retornar o objeto da conta (sem o saldo)
//buscarContaPorTitular(titular) -> deverá retornar o objeto da conta (sem o saldo)
//mostrarInformacoes()-> mostra informações da agência bancária e quantidade de contas ativas

class AgenciaBancaria{
    #listacontas;

    constructor(endereco, gerente, telefone, numeroAgencia){
        this.#listacontas = [];
        this.endereco = endereco;
        this.gerente = gerente;
        this.telefone = telefone;
        this.numeroAgencia = numeroAgencia;
        this.quantidadeContas = this.#listacontas.length
    }

    AdicionarConta(conta){
        if((conta instanceof contaBancaria) == false){
            throw new Error('a conta não esta de acordo com a classe conta bancaria')
        }
        this.#listacontas.push(conta)
        return 'conta adicionada com sucesso'
    }

    RemoverConta(conta){
        if(conta.getSaldo() > 0){
            throw new Error('a conta esta com saldo maior que 0. Por favor, retire o valor em conta para evitar perdas');
        }
        const verify = this.#listacontas.filter((acount)=> {return acount.titular == conta.titular})

        if(!verify){
            throw new Error('conta não encontrada')
        }

        const localizacao = this.#listacontas.indexOf(verify)

        return this.#listacontas.slice(localizacao)
    }

    ProcurarPorNumero(numero){
        return this.#listacontas.filter((acount)=> {return acount.numero == numero})
    }

    ProcurarPorTitular(titular){
        return this.#listacontas.filter((acount)=> {return acount.titular == titular})
    }

    MostrarInformacoes(){

    }
}