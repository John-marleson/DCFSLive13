const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()

const RouterLogin = require('./5.rotas/loginRoutes')
const RouterUsuario = require('./5.rotas/usuariosRoutes')

app.use('/login',RouterLogin)
app.use('/usuarios',RouterUsuario)

app.listen(process.env.PORTA_API, ()=> {
    console.log(`servidor aberto na porta ${process.env.PORTA_API}`)
    console.log(`acesse: ${process.env.LINK_API}`)
})