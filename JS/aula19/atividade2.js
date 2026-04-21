let produto = {
    nome: "computador",
    marca: 'dell',
    preco: 3000,
    estoque: 10,
    descricao: 'computador de alta performace para jogos e trabalho',
    categoria: 'eletronico'
}

for(let x in produto){
    console.log(produto[x])
}

let consulta = Object.keys(produto)
let pesquisa = consulta.includes("cores")

if (pesquisa == true){
    console.log(produto.cores)
}else if(pesquisa == false){
    console.log("cores não esxite!")
}else{
    alert("erro404")
}