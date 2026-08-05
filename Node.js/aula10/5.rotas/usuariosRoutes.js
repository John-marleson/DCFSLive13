const express = require('express')
const Router = express.Router()

const usuariosController = require('../3.controladores/usuariosController')
const { validarUsuario, validarPut } = require('../4.middlewares/validacaoMiddleware')
const autentificacao = require('../4.middlewares/autentificacaoMiddleware')

Router.get('/', (req, res) => usuariosController.getUsuarios(req,res))
Router.post('/', validarUsuario, (req, res) => usuariosController.postUsuarios(req,res))
Router.put('/:id', validarPut, (req, res) => usuariosController.putUsuarios(req,res))
Router.delete('/:id', autentificacao, (req, res) => usuariosController.deleteUsuarios(req,res))

module.exports = Router;