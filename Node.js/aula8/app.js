const express = require('express')
const app = express()
app.use(express.json())

const RouterLogin = require('./5.rotas/loginRoutes')
const RouterUsuario = require('./5.rotas/usuariosRoutes')

app.use(RouterLogin)
app.use(RouterUsuario)

app.listen(3001, ()=> {
    console.log('servidor aberto na porta 3001')
    console.log('acesse: http://localhost:3001')
})