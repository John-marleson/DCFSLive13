//você vai receber um produto que deve ser adicionado a um "banco de dados". Esse banco de dados será um array. O objeto para ser adicionado ao banco deve ter os seguintes atributos: nome, descricao, preco,quantidade. Caso algum dos atributos obrigatórios não seja informado no objeto recebido como parâmetro da função, retorne um erro personalizado. 
//Caso o preço ou a quantidade sejam informados com valores nulos, indefinidos, zero ou negativos, retorne um erro personalizado.
//caso o objeto passe por todos as validacoes, adicione um atributo disponivel: true e insira o objeto no banco de dados.Retorne um objeto com 2 atributos: mensagem e objeto adicionado.
//DICA: para adicionar o objeto ao banco de dados, use o método push do array

let bancoDados={
    produtos:[{nome: 'laranaja', descricao: 'fruta', preco: 15, quantidade: 2}],
    quantidade: this.produtos.length,
    adicionar: function(objeto){
    if (objeto.nome == undefined || objeto.descricao == undefined || objeto.preco == undefined || objeto.quantidade == undefined) {
        throw new Error(`os valores não foram informados`)
    }
    if (objeto.preco == null || objeto.preco < 0) {
        throw new Error('O valor de preço não pode ser nulo ou menor que zero')
    }
    if (objeto.quantidade == null || objeto.quantidade < 0) {
        throw new Error('O valor de quantidade não pode ser nulo ou menor que zero')
    }

    const add = this.produtos.push({
        nome: objeto.nome,
        descricao: objeto.descricao,
        preco: objeto.preco,
        quantidade: objeto.quantidade,
        disponivel: true
    })

    return {
        mensagem: 'sucesso',
        objeto: bancoDados.produtos
    }
}
}

console.log(bancoDados.adicionar({nome: 'laranaja', descricao: 'fruta', preco: 15, quantidade: 2}))