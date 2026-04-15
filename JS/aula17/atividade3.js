//Atividade 3
//Sistema de nota fiscal. Peça para o usário digitar quantos itens estarão na nota. O valor de cada item deve ser adicionado em um array, o nome do item deve ser adicionado em outro array. No final, mostre o valor total da nota e a lista de itens comprados.
//Exemplo: 3 itens na nota
//nomesItens = ['arroz', 'feijão', 'macarrão']
//valoresItens = [10, 8, 5]
//No console: 
/*  arroz - R$10
    feijão - R$8
    macarrão - R$5
    Total: R$23 
*/
let quanntItens = Number(prompt("informe a quantidade de itens:"))

let itensNota = []
let valorNota = []
let total = 0
while(quanntItens <= 0 || isNaN(quanntItens)){
    alert("Digite um valor valido!");
    console.log("quantos itens tem na compra?")
}
console.log(itensNota)
console.log(valorNota)
for(let i = 0;i<quanntItens;i++){
    itensNota[i] = prompt("digite o nome do produto:")
    valorNota[i] = prompt("digite o valor:")
    total += Number(valorNota[i])

    console.log(`${itensNota[i]} - ${valorNota[i]}`)
}
console.log(itensNota)
console.log(valorNota)
console.log(`total: ${total}`)