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
app.get('/funcionarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const verify = banco.funcionarios.find(a => a.id == id);

    if (verify) {
        res.status(200)
        res.json({
            funcionario: verify,
            status: 200,
            mensagem: 'funcionario encontradosucesso'
        });
    } else {
        res.status(404)
        res.send('funcionario não encontrado!');
    }
});

app.get('/funcionarios', (req, res)=>{
    const {cnh, setor, cargo} = req.query;

    const respostaBanco = banco.funcionarios

    if(cnh){
        respostaBanco = respostaBanco.filter(a => a.cnh == cnh)
    }
    if(setor){
         respostaBanco = respostaBanco.filter(a => a.setor == setor)
    }
    if(cargo){
         respostaBanco = respostaBanco.filter(a => a.cargo == setor)
    }
    res.status(200)
    res.json({
        funcionarios: respostaBanco,
        quantidadde: respostaBanco.length,
        data: new Date()
    })
    res.end()
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



app.listen(3001, () => {
  console.log('Servidor rodando na URL http://localhost:3001');
});



