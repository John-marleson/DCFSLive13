const express = require('express')
const Router = express.Router()

const usuariosController = require('../3.controladores/usuariosController')
const { validarUsuario, validarPut, validarDelete } = require('../4.middlewares/validacaoMiddleware')

Router.get('/usuarios', (req, res) => usuariosController.getUsuarios(req,res))
Router.post('/usuarios', validarUsuario, (req, res) => usuariosController.postUsuarios(req,res))
Router.put('/usuarios/:id', validarPut, (req, res) => usuariosController.putUsuarios(req,res))
Router.delete('/usuarios/:id', validarDelete, (req, res) => usuariosController.deleteUsuarios(req,res))

module.exports = Router;