function conta(nome, agencia, numero, saldo = 0){
    return {
        nome: nome,
        agencia: agencia,
        numero: numero,
        saldo: saldo
    }   
}

function sacar(conta, valor){
    if(conta.saldo < valor){
        console.log('saldo insuficiente!')
    }else{
        return conta.saldo + valor
    }
}

function depositar (conta, valor){
    return conta.saldo + valor
}

function extrato (conta){
    console.log(`nome: ${conta.nome}`)
    console.log(`agencia: ${conta.agencia}`)
    console.log(`numero: ${conta.numero}`)
    console.log(`saldo: ${conta.saldo}`)
}

module.exports = {conta, sacar, depositar, extrato};