let quantItens = Number(prompt("quantos itens(produtos): "))
let total = 0
let valorFinal = 0
let valorMultiplicado = 0

for(let i=0;i<quantItens;i++){
    let NomeDoProduto = prompt("Qual o nome do produto?")
    let quantidade = Number(prompt("qual a quantidade?"))
    let preco = Number(prompt("Qual o valor do produto?"))
    // nome do produto + preço + quantidade + valor final
    valorMultiplicado = (quantidade * preco)
    console.log(NomeDoProduto + " - " + quantidade + " - " + preco + " - total: " + valorMultiplicado)
    total = valorMultiplicado + total
}
console.log("total: " + total)