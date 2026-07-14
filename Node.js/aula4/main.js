const express = require('express')
const fs = require('fs')
const { json } = require('stream/consumers')

const app = express()
app.use(express.json())

const banco = JSON.parse(fs.readFileSync('./dbescola.json'))

app.get('/', (req, res)=>{
    res.status(200)
    res.json([
        {
            rota: "/aluno",
            metodo: "GET",
            descricao: `rota para ver ${banco.alunos.length} alunos.`
        },
        {
            rota: "/cursos",
            metodo: "GET",
            descricao: `rota para ver ${banco.cursos.length} cursos.`
        },
        {
            rota: "/unidades",
            metodo: "GET",
            descricao: `rota para ver ${banco.unidades.length} unidades.`
        },
        {
            rota: "/professores",
            metodo: "GET",
            descricao: `rota para ver ${banco.professores.length} professores.`
        },
    ])
    
    res.end()
})
app.get('/alunos', (req, res)=>{
        res.status(200)
        res.json({
            quantidade: banco.alunos.length,
            alunos: banco.alunos,
            data: new Date()
        })
        res.end()
})

app.post('/alunos', (req, res) => {
    const dbreq = req.body

    if(!dbreq){
        res.status(400)
        res.json({
            mensagem: 'erro, conteudo de pesquisa inexistente!',
            status: 400
        })
        res.end()
        return
    }
    if(!dbreq.nome || !dbreq.email || !dbreq.senha || !dbreq.endereco || !dbreq.telefone || !dbreq.curso || !dbreq.disciplinasCursadas){
        res.status(400)
        res.json({
            mensagem: 'erro por falta de atributos.',
            status: 400
        })
        return
    }

    dbreq.id = banco.alunos.length + 1
    banco.alunos.push(dbreq)

    fs.writeFileSync('./dbescola.json', JSON.stringify(banco))
    res.status(200)
    res.json({
        mensagem: 'aluno cadastrado com sucesso!',
        status: 200
    })
    res.end()
})

app.get('/unidades', (req, res)=>{
    res.status(200)
    res.json({
        unidades: banco.unidades,
        quantidade: banco.unidades.length,
        data: new Date()
    })
    res.end()
})

app.post ('/unidades', (req, res)=>{
    try{
        const dadosReq = req.body

        const objFormato = ["nome", "endereço", "telefone"]

        if(!dadosReq){
            res.status(400)
            res.json({
                "mensagem": "erro por total ausência dos atributos",
                "Status": 400,
                "erro": "ausência total dos atributos obrigatórios"
            })
            res.end()
            return
        }

        if(!dadosReq.nome || !dadosReq.endereco || !dadosReq.telefone){
            res.status(400)
            res.json({
                "mensagem": "erro ao criar unidade ",
                "Status": 400,
                "erro": "ausência dos atributos obrigatórios: listar atributos aqui"
            })
            res.end()
            return
        }

        const objreq = {
            id: banco.unidades.length + 1,
            nome: dadosReq.nome,
            endereco: dadosReq.endereco,
            telefone: dadosReq.telefone
        }

        banco.unidades.push(objreq)
        fs.writeFileSync('./dbescola.json', JSON.stringify(banco))

        res.status(200)
        res.json({
            "mensagem": "sucesso, unidade criada",
            "Status": 201
        })
        res.end()
    }catch{
        res.status(400)
        res.json({
            "mensagem": "erro ao criar unidade ",
            "Status": 400,
            "erro": "ausência dos atributos obrigatórios: listar atributos aqui"
        })
        res.end()
    }
})

app.listen(8001, () => {
    console.log('servidor aberto na porta 8001')
    console.log('acesse http://localhost:8001 para ter acesso ao servidor.')
})