const express = require('express')
const getcategoriasController = require('./3.Controller/CategoriasController')
const getAutoresController = require('./3.Controller/AutoresController')
const getLivrosController = require('./3.Controller/livrosController')

const app = (express())
app.use(express.json())

/*rota principal*/
app.get('/', (req, res) => res.json({ mensagem: 'ola, seja bem vindo a nossa api!' }))

/*rotas para categorias*/
app.get('/categorias', (req, res) => getcategoriasController.getCategorias(req, res))
app.get('/categorias/:id', (req, res) => getcategoriasController.getCategoria(req, res))
app.post('/categorias', (req, res) => getcategoriasController.postCategoria(req, res))
app.put('/categorias/:id', (req, res) => getcategoriasController.putCategoria(req, res))
app.delete('/categorias/:id', (req, res) => getcategoriasController.deleteCategoria(req, res))

/*rotas para autores*/
app.get('/autores', (req, res) => getAutoresController.getAutores(req, res))
app.get('/autores/:id', (req, res) => getAutoresController.getAutoresPorId(req, res))
app.post('/autores', (req, res) => getAutoresController.postAutores(req, res))

/*rotas paralivros*/
app.get('/livros', (req, res) => getLivrosController.getLivrosAll(req, res))
app.get('/livros/:id', (req, res) => getLivrosController.getLivrosPorId(req, res))
app.get('/livros/:id', (req, res) => getLivrosController.getLivrosJoin(req, res))

app.listen(3001, () => {
    console.log('servidor aberto na porta 3001')
    console.log('acesse: http://localhost:3001')
})