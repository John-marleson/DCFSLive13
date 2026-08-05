const contaBancaria = {
    usuario: {
        nome: 'john',
        conta: '00000-00',
        saldo: 0,
        senha: 'JJJ'
    },
    depositar: function(senha, valor){
        if(!senha || !valor){
            throw new Error('para depositar é preciso digitar a senha e inserir o valor')
        }
        if(senha != this.usuario.senha){
            throw new Error('senha invalida. não foi possivel prosseguir com o deposito')
        }
        if(valor == undefined || valor <= 0){
            throw new Error('o valor de deposito deve ser maior que 0')
        }

        this.usuario.saldo += valor

        return {
                nome: this.usuario.nome,
                saldo: this.usuario.saldo
            }
    },
    sacar: function(senha, valor){
        if(!senha || !valor){
            throw new Error('para sacar é preciso digitar a senha e inserir o valor')
        }
        if(senha != this.usuario.senha){
            throw new Error('senha invalida. não foi possivel prosseguir com o deposito')
        }
        if(valor == undefined || valor <= 0){
            throw new Error('o valor de saque deve ser maior que 0')
        }
        if(valor > this.usuario.saldo){
            throw new Error('o valor digitado é maior que o saldo')
        }

        this.usuario.saldo -= valor

        return {
                nome: this.usuario.nome,
                saldo: this.usuario.saldo
            }
    }
}

console.log(contaBancaria.depositar('JJJ', 40))
console.log(contaBancaria.sacar('JJJ', 20))