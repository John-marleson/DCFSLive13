const bcrypt = require('bcrypt')
const UsuarioModel = require('../1.models/usuariosModel')


async function loginUsuario(email, senha) {
    try {
        const usuarioEncontrado = await UsuarioModel.findOne({ where: { email: email } })

        if(!usuarioEncontrado){
            return{
                erro: 'usuario não encontrado'
            }
        }

        const senhaCriptografada = usuarioEncontrado.dataValues.senha
        const compare = await bcrypt.compare(senha, senhaCriptografada)

        if(compare){
            return {
                sucesso: 'login realizado com sucesso'
            }
        }else{
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