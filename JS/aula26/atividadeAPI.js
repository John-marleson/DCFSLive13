// usando a API via CEP, faça a solicitação de um cep e mostre as informações formatadas de endereço na tela. 
//Dica: crie preliminarmente os elementos do index.html ou utilize o createElement. e appendChild para inserir os elementos na tela
// utilize o fetch para fazer a solicitação e os metodos thens para tratar os dados retornados.
// IMPORTANTE: use o método .json para converter a resposta em json ( esse metodo retorna uma promisse )
// para um cep que não exista, crie uma exceção e mostre uma mensagem de erro na tela. Utilize o throw new Error() para criar e o catch para capturar o erro

const fomulario = document.getElementById('formulario')
const pesquisador = document.querySelector('#pesquisador')
const div = document.querySelector('#local')

function escreverCep(dados){


    let div1 = document.createElement('div')
    div.appendChild(div1)

    let rua = document.createElement('p')
    rua.innerText = `rua: ${dados.logradouro}`
    div1.appendChild(rua)

    let bairro = document.createElement('p')
    bairro.innerText = `bairro: ${dados.bairro}`
    div1.appendChild(bairro)

    let estado = document.createElement('p')
    estado.innerText = `estado: ${dados.estado}`
    div1.appendChild(estado)
}

function pesquisarCep (cep){
    fetch(cep)
        .then((resposta)=> resposta.json())
        .then((dados)=> {
            console.log(dados);
            escreverCep(dados)
        })
        .catch(erro => console.log(erro))
}

fomulario.addEventListener('submit', (event)=>{
    event.preventDefault();

    const valorPesquisa = pesquisador.value;
    const cep = `https://viacep.com.br/ws/${valorPesquisa}/json/`
    pesquisarCep(cep)
    fomulario.reset()
})




