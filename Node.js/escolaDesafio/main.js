const express = require('express')
const app = express()
app.use(express.json())

const fs = require('fs')
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
/* configurando rota "/alunos"*/
app.get('/alunos', (req, res)=>{
    const {nome, curso} = req.query
    let listaAlunos = [...banco.alunos]

    if(nome){
        listaAlunos = listaAlunos.filter(a => a.nome.toLowerCase().includes(nome.toLowerCase()))
    }

    if(curso){
        listaAlunos = listaAlunos.filter(a => a.curso.toLowerCase().includes(curso.toLowerCase()))
    }

    res.status(200)
    res.json({
        alunos: listaAlunos,
        quantidade: listaAlunos.length,
        data: new Date()
    })
    res.end()
})
/* configurando rota "/cursos"*/
app.get('/cursos', (req, res)=>{
    res.status(200)
    res.json({
        cursos: banco.cursos,
        quantidade: banco.cursos.length,
        data: new Date()
    })
    res.end()
})
/* configurando rota "/unidades"*/
app.get('/unidades', (req, res)=>{
    res.status(200)
    res.json({
        unidades: banco.unidades,
        quantidade: banco.unidades.length,
        data: new Date()
    })
    res.end()
})
/* configurando rota "/professores"*/
app.get('/professores', (req, res)=>{
    res.status(200)
    res.json({
        professores: banco.professores,
        quantidade: banco.professores.length,
        data: new Date()
    })
    res.end()
})

/*rotas por id*/
app.get('/alunos/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const idBanco = banco.alunos.find(a => a.id == id)
    res.status(200)
    res.json({
        aluno: idBanco,
        status: 200,
        mensagem: 'aluno(a) encontrado com sucesso!'
    })
    res.end()
})
app.get('/cursos/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const idBanco = banco.cursos.find(a => a.id == id)
    res.status(200)
    res.json({
        curso: idBanco,
        status: 200,
        mensagem:  'curso encontrado com sucesso!'
    })
    res.end()
})
app.get('/unidades/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const idBanco = banco.unidades.find(a => a.id == id)
    res.status(200)
    res.json({
        unidade: idBanco,
        status: 200,
        mensagem: 'unidade encontrado com sucesso!'
    })
    res.end()
})
app.get('/professores/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const idBanco = banco.professores.find(a => a.id == id)
    res.status(200)
    res.json({
        professor: idBanco,
        status: 200,
        mensagem: 'professor(a) encontrado com sucesso!'
    })
    res.end()
})

app.get('/professores', (req, res)=>{
    try{
        const {titulacao} = req.query
        let listaProfessores = [...banco.professores]

        if(titulacao){
            listaProfessores = listaProfessores.filter(a => a.titulacao && a.titulacao.toLowerCase() === titulacao.toLowerCase())
        }

        res.status(200)
        res.json({
            quantidade: listaProfessores.length,
            professores: listaProfessores,
            data: new Date()
        })
        res.end()
    } catch{
        res.status(400)
        res.json({
            mensagem: "erro! catch"
        })
        res.end()
    }
})

app.listen(3002, ()=>{
    console.log('servidor aberto: http://localhost:3002')
})