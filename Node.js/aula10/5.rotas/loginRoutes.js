const express = require('express')
const Router = express.Router()

const loginController = require('../3.controladores/loginController')
const { validarLogin } = require('../4.middlewares/validacaoMiddleware')

Router.post('/login', validarLogin,(req, res) => loginController.postLogin(req,res))
Router.get('/:id', )

module.exports = Router;