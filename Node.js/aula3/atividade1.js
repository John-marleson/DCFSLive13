/* 1ª Atividade:
Crie um rota principal que retorne uma mensagem de boas vindas, os recursos disponíveis na API e a data atual.
Exemplo de resposta:
{
    "mensagem": "Olá, seja bem-vindo a nossa API!",
    "recursos": [
        {
            "rota": "/funcionarios",
            "metodo": "GET",
            "descricao": "Retorna uma lista de funcionários"
        },
        {
            "rota": "/produtos",
            "metodo": "GET",
            "descricao": "Retorna uma lista de produtos"
        },
        {
            "rota": "/unidades",
            "metodo": "GET",
            "descricao": "Retorna a lista das nossas X unidades" //utilizar o comprimento do array de unidades para informar a quantidade de unidades
        }
    ],
    "data": "2023-03-15T10:30:00Z"
}

Depois crie uma rota para cada recurso disponível na API, retornando os dados correspondentes.

DICA: use o módulo fs para ler os arquivos JSON e retornar os dados para o cliente.Use o método readFileSync para ler os arquivos de forma síncrona, e o método JSON.parse para converter o conteúdo do arquivo em um objeto JavaScript.
*/

const express = require('express')
const app = express()
app.use(express.json())

const fs = require('fs')

const banco = JSON.parse(fs.readFileSync('./bancoDados.json'))

app.get('/', (requisicao, resposta) => {
    resposta.status(200)
    resposta.json({
    mensagem: "Olá, seja bem-vindo a nossa API!",
    recursos: [
        {
            rota: "/funcionarios",
            metodo: "GET",
            descricao: "Retorna uma lista de funcionários"
        },
        {
            rota: "/produtos",
            metodo: "GET",
            descricao: "Retorna uma lista de produtos"
        },
        {
            rota: "/unidades",
            metodo: "GET",
            descricao: `Retorna a lista das nossas ${banco.funcionarios.length} unidades` //utilizar o comprimento do array de unidades para informar a quantidade de unidades
        }
    ],
    data: "2023-03-15T10:30:00Z"
})
})
app.get('/funcionarios', (requisicao, resposta) => {
    resposta.status(200)
    resposta.json({
        funcionarios: banco.funcionarios,
        quantidadde: banco.funcionarios.length,
        data: new Date()
    })
    resposta.end()
})

app.get('/produtos', (requisicao, resposta) => {
    resposta.status(200)
    resposta.json({
        funcionarios: banco.produtos,
        quantidadde: banco.produtos.length,
        data: new Date()
    })
    resposta.end()
})

app.get('/unidades', (requisicao, resposta) => {
    resposta.status(200)
    resposta.json({
        funcionarios: banco.unidades,
        quantidadde: banco.unidades.length,
        data: new Date()
    })
    resposta.end()
})



app.listen(3000, () => {
  console.log('Servidor rodando na URL http://localhost:3000');
});



