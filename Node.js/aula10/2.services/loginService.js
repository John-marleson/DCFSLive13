const bcrypt = require('bcrypt')
const UsuarioModel = require('../1.models/usuariosModel')
require('dotenv').config({ path: '../.env' })
const jwt = require('jsonwebtoken')


async function loginUsuario(email, senha) {
    try {
        const usuarioEncontrado = await UsuarioModel.findOne({ where: { email: email } })

        if (!usuarioEncontrado) {
            return {
                erro: 'usuario não encontrado'
            }
        }

        const senhaCriptografada = usuarioEncontrado.dataValues.senha
        const compare = await bcrypt.compare(senha, senhaCriptografada)

        if (compare) {
            const token = jwt.sign({
                id: usuarioEncontrado.dataValues.id,
                nome: usuarioEncontrado.dataValues.nome,
                email: usuarioEncontrado.dataValues.email,
                senha: usuarioEncontrado.dataValues.senha
            },
            process.env.SENHA_SECRETA_JWT,
            { expiresIn: '1h' }
            )

            return {
                token: token,
                mensagem: 'login realizado com sucesso'
            }
        } else {
            return {
                erro: 'senha ou usuario incorreto!'
            }
        }

    } catch (erro) {
        return {
            erro: 'erro interno do sistema'
        }
    }
}

module.exports = {
    loginUsuario
}