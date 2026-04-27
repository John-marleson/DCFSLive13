const produtos = [
  // MOBILIA
  { id: 1, nome: "Sofá 3 lugares", departamento: "mobilia", disponibilidade: true, estoque: 5, preco: 1800 },
  { id: 2, nome: "Mesa de jantar", departamento: "mobilia", disponibilidade: true, estoque: 3, preco: 1200 },
  { id: 3, nome: "Cadeira de escritório", departamento: "mobilia", disponibilidade: true, estoque: 10, preco: 450 },
  { id: 4, nome: "Guarda-roupa", departamento: "mobilia", disponibilidade: false, estoque: 0, preco: 2200 },
  { id: 5, nome: "Estante", departamento: "mobilia", disponibilidade: true, estoque: 7, preco: 600 },
  { id: 6, nome: "Rack para TV", departamento: "mobilia", disponibilidade: true, estoque: 4, preco: 750 },
  { id: 7, nome: "Cama casal", departamento: "mobilia", disponibilidade: true, estoque: 2, preco: 1500 },
  { id: 8, nome: "Mesa de centro", departamento: "mobilia", disponibilidade: true, estoque: 6, preco: 300 },

  // CALÇADOS
  { id: 9, nome: "Tênis esportivo", departamento: "calçados", disponibilidade: true, estoque: 15, preco: 250 },
  { id: 10, nome: "Sandália feminina", departamento: "calçados", disponibilidade: true, estoque: 12, preco: 120 },
  { id: 11, nome: "Sapato social", departamento: "calçados", disponibilidade: true, estoque: 8, preco: 300 },
  { id: 12, nome: "Chinelo", departamento: "calçados", disponibilidade: true, estoque: 20, preco: 40 },
  { id: 13, nome: "Bota couro", departamento: "calçados", disponibilidade: false, estoque: 0, preco: 450 },
  { id: 14, nome: "Tênis casual", departamento: "calçados", disponibilidade: true, estoque: 10, preco: 200 },
  { id: 15, nome: "Salto alto", departamento: "calçados", disponibilidade: true, estoque: 5, preco: 180 },

  // VESTUARIO
  { id: 16, nome: "Camiseta básica", departamento: "vestuario", disponibilidade: true, estoque: 30, preco: 50 },
  { id: 17, nome: "Calça jeans", departamento: "vestuario", disponibilidade: true, estoque: 18, preco: 120 },
  { id: 18, nome: "Jaqueta", departamento: "vestuario", disponibilidade: true, estoque: 6, preco: 300 },
  { id: 19, nome: "Vestido", departamento: "vestuario", disponibilidade: true, estoque: 10, preco: 200 },
  { id: 20, nome: "Saia", departamento: "vestuario", disponibilidade: true, estoque: 9, preco: 90 },
  { id: 21, nome: "Bermuda", departamento: "vestuario", disponibilidade: true, estoque: 14, preco: 80 },
  { id: 22, nome: "Moletom", departamento: "vestuario", disponibilidade: false, estoque: 0, preco: 150 },
  { id: 23, nome: "Camisa social", departamento: "vestuario", disponibilidade: true, estoque: 11, preco: 130 },

  // ELETRONICOS
  { id: 24, nome: "Smartphone", departamento: "eletronicos", disponibilidade: true, estoque: 8, preco: 2500 },
  { id: 25, nome: "Notebook", departamento: "eletronicos", disponibilidade: true, estoque: 5, preco: 4000 },
  { id: 26, nome: "Smart TV", departamento: "eletronicos", disponibilidade: true, estoque: 3, preco: 3200 },
  { id: 27, nome: "Fone de ouvido", departamento: "eletronicos", disponibilidade: true, estoque: 20, preco: 150 },
  { id: 28, nome: "Caixa de som", departamento: "eletronicos", disponibilidade: true, estoque: 9, preco: 300 },
  { id: 29, nome: "Mouse gamer", departamento: "eletronicos", disponibilidade: true, estoque: 12, preco: 120 },
  { id: 30, nome: "Teclado mecânico", departamento: "eletronicos", disponibilidade: false, estoque: 0, preco: 350 }
];


//EXERCÍCIOS NÍVEL: FÁCIL
// a) Usando o método filter, retorne apenas os produtos que possuem estoque maior que 0.
let metFilter = produtos.filter((item)=>{
    if(item.estoque > 0){
        return true
    }else{
        return false
    }
    return
})
console.log(metFilter)

// b) Usando o método filter, retorne apenas os produtos do departamento "vestuario" que estão disponíveis (disponibilidade: true).
let depVestuario = produtos.filter((item) => {
    if(item.departamento == 'vestuario' && item.disponibilidade == true){
        return true
    }else{
        return false
    }
})
console.log(depVestuario)
// c) Usando o método map, crie um novo array contendo apenas os preços com desconto de 10%.
let metMap = produtos.map((item) => item.preco * 0.9)
console.log(metMap)
// d) Usando o método map, retorne um novo array de objetos contendo apenas nome e preco. (utilize o spread operator ...)
let metMapSpread = produtos.map((item) => {
    return `nome: ${item.nome} e preço ${item.preco}`
})
console.log(metMapSpread)
// e) Usando o método map, adicione uma nova propriedade categoriaPremium, que será true para produtos com preço acima de 1000. (utilize o spread operator ...)
let catPremium = produtos.map((item) => {
    let novoprodutos = {...produtos}
    if(item.preco > 1000){
        return novoprodutos.categoriaPremium = true
    }else{
        return false
    }
    return
})
console.log(catPremium)

//EXERCÍCIOS NÍVEL: MÉDIO
// f) Usando o método reduce, calcule o valor total de todos os produtos em estoque (preço * quantidade em estoque).
let reduce = produtos.reduce((acumulador, item) => {
    return acumulador + item.preco
},0)
console.log(reduce)
// g) Usando o método reduce, conte quantos produtos existem no departamento "eletronicos".
let reduceEletronicos = produtos.reduce((acumulador, item) =>{
    let quantidade = 1
    if(item.departamento == 'eletronicos'){
        return acumulador += quantidade
    }else{
        return false
    }
},0)
console.log(reduceEletronicos)
// h) Usando o método filter + map, retorne apenas os nomes dos produtos indisponíveis.
let filteMap = produtos.map((item) =>{
    let produtos2 = {...produtos}
    if(item.disponibilidade == true){
            return true
        }else{
            return false
        }
    return produtos2
})
console.log(filteMap)
// i) Usando o método filter, retorne os produtos com preço entre 100 e 500.
let filterQuant = produtos.filter((item)=>{
    if(item.preco >=100 && item.preco <= 500){
        return item.preco 
    }else{
        return false
    }
})
console.log(filterQuant)
// j) Usando o método map, transforme todos os nomes dos produtos para letras minúsculas.
