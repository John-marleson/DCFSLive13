class Cliente{

    constructor(nome, telefone, endereco){
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    atualizarEndereco(endereco){
        this.endereco = endereco
    }

    exibirDados(){
        console.log(`
            nome: ${this.nome}
            telefone: ${this.telefone}
            Endereço: ${this.endereco}
            `)
    }
}

class Pedido{

    constructor(numero, cliente, produtos, pagamento, status){
        this.numero = numero;
        this.cliente = cliente;
        this.produtos = [];
        this.pagamento = pagamento;
        this.status = status
    }

    adicionarProduto(produto){
        return this.produtos.push(produto)
    }

    removerProduto(produto){
        return this.produtos.splice(this.produtos.indexOf(produto), 1)
    }

    calcularTotal(){
        let calcularTotal = 0;

        for(let i in this.produtos){
        this.produtos[i] += total;
       }

        return calcularTotal;
    }
    adicionarPagamento(pagamento){
        this.pagamento = pagamento
    }
    finalizarPedido(){
        if(this.status == 'aberto'){
            return this.status = 'fechado'
        }else{
            console.log('produto ja finalizado')
        }
    }

    exibirResumo(){
        this.numero;
        this.cliente;
        this.produtos;
        this.pagamento;
        this.status;
    }
}

class Produto extends Pedido{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    calcularPrecoFinal(desconto){
        return this.preco -= desconto
    }

    exibirDescricao(){
        console.log(`
            nome: ${this.nome},
            preço: ${this.preco}
            `)
    }
}

class Hamburguer extends Produto{
    constructor(tipoPao, adicionais){
        super(nome, preco);
        this.tipoPao = tipoPao;
        this.adicionais = [];
    }

    adicionarAdicional(adicional){
        this.adicionais.push(adicional)
    }

    removerAdicional(adicional){
        switch(adicional){

        }

        this.adicionais.splice()
    }

    calcularPrecoFinal(desconto){
        return this.calcularPrecoFinal(desconto)
    }

    exibirDescricao(){
        console.log(`
            nome: ${this.nome},
            preço: ${this.preco},
            tipo de pão: ${this.tipoPao},
            adicionais: ${this.adicionais}
            `)
    }
}

class Bebida extends Produto{
    constructor(tamanho, possuiGelo){
        super(nome, preco);
        this.tamanho = tamanho;
        this.possuiGelo = possuiGelo;
    }
    adicionarGelo(){
        return this.possuiGelo = true
    }

    removerGelo(){
        return this.possuiGelo = false
    }

    calcularPrecoFinal(desconto){
        this.calcularPrecoFinal(desconto)
    }

    exibirDescricao(){
        console.log(`
            nome: ${this.nome},
            preço: ${this.preco},
            tamanho: ${this.tamanho},
            possui gelo: ${this.possuiGelo}
            `)
    }
}

class Sobremesa extends Produto{
    constructor(tipo, possuiEmbalagem, possuiDescartaveis){
        super(nome, preco);
        this.tipo = tipo;
        this.possuiEmbalagem = possuiEmbalagem;
        this.possuiDescartaveis = possuiDescartaveis;
    }

    adicionarEmbalagem(embalagem){
        return this.possuiEmbalagem.push(embalagem)
    }

    adicionarDescartaveis(descartaveis){
        return this.possuiDescartaveis.push(descartaveis)
    }
    
    calcularPrecoFinal(){

    }
    exibirDescricao(){

    }
}