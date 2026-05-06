// DESAFIO EXTRA: 
//crie uma página com bootstrap que seja um conversor de moedas. Use a API https://brasilapi.com.br/docs#tag/CAMBIO para fazer a conversão de moedas ( real para moeda estrangeira : dolar, euro e libra)
// o usuário digite um valor em reais, em um campo de imput e o valor seja convertido para as 3 moedas, mediante a submissão do formulário. Os valores devem ser mostrados na tela

const moedas = 'https://brasilapi.com.br/api/cambio/v1/moedas'
const formulário = document.getElementById('formulario')
const input1 = document.getElementById('nomeMoeda')
const input2 = document.getElementById('quantidadeMoeda')
const input3 = document.getElementById('moedaProcurada')
const dadosApi

function pegarMoedas(callBack){
    fetch(callBack)
        .then((resposta)=> resposta.json())
        .then((dados) => {
            console.log(dados)
            dadosApi = dados
        })
        .catch((erro)=> console.log(erro.mensage))
}
function mostrarMoedas(){

}

function filtrarDados(callBack){
    dadosApi.forEach((elemento) => {
        if(elemento.simbolo == callBack[2]){
            return elemento.nome
        }
    });
}



formulário.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const moedas2 = [input1.value, input2.value, input3.value]

    pegarMoedas(moedas)
    filtrarDados(moedas2)
    formulário.reset()
})