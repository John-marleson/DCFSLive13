//faça um get na api The Fake Store e mostre os nomes de todos os produtos seguidos dos preços
// Exemplo : Nome do Produto 1 - $Preço 


//dicas: use o fetch com then e catch para tratar o erro
// para o objeto json, use o json() para converter a resposta em json. Que nesse caso será um array de objetos
// use os métodos para arrays para iterar sobre o array e mostrar as informações na tela
// se a api estiver inativa  ou retornar um array vazio, crie uma exceção e mostre uma mensagem de erro na tela. Utilize o throw new Error() para criar e o catch para capturar o erro

//https://fakestoreapi.com/

const produto = 'https://fakestoreapi.com/products' 
const divPai = document.getElementById('local')
const btn = document.getElementById('btn')

function mostrarProduto (itens){
    let card = document.createElement('div')
    card.classList.add('card')
    divPai.appendChild(card)

    let imagem = document.createElement('img')
    imagem.src = itens.imagem
    imagem.classList.add('card-img-top')
    card.appendChild(imagem)

    let nome = document.createElement('p')
    nome.innerText = `nome: ${itens.title}`
    nome.classList.add('card-title')
    card.appendChild(nome)

    let preco = document.createElement('p')
    preco.innerText = `preco: ${itens.price}`
    preco.classList.add('card-text')
    card.appendChild(preco)

    let categoria = document.createElement('p')
    categoria.innerText = `categoria: ${itens.category}`
    categoria.classList.add('card-text')
    card.appendChild(categoria)
}

function procurarProduto(array){
    fetch(array)
        .then((resposta)=> resposta.json())
        .then((array)=> {
            console.log(array);
            array.forEach((elemento) => {
                mostrarProduto(elemento)
            });
            
        })
        .catch((erro)=> console.log(`erro tratado`))
}

btn.addEventListener('click', ()=>{
    procurarProduto(produto)
})