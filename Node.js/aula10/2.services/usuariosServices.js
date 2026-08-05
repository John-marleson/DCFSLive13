const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../.env'})
const usuariosModel = require('../1.models/usuariosModel')


async function listarUsuarios () {
    try{
        const dados = await usuariosModel.findAll()

        if(!dados){
            return {
                erro: 'não foi possivel encontrar os usuarios'
            }
        }

        return { dados: dados }
    }catch(erro){
        console.log(erro)
        return{
            erro: erro.message
        }
    }
}

async function criarUsuario(nome, email, senha) {
    try {
        const emailEncontrado = await usuariosModel.findOne({ where: { email: email } })

        if (emailEncontrado) {
            return {
                erro: 'Email duplicado'
            }
        }

        const salts = await bcrypt.genSaltSync(10)
        const senhaBcrypt = await bcrypt.hashSync(senha, salts)

        const dados = await usuariosModel.create({
            nome: nome,
            email: email,
            senha: senhaBcrypt
        })

        return {
            dados: dados.dataValues
        }
    } catch (erro) {
        console.log(erro)
        return {
            erro: erro.message
        }
    }
}
async function atualizarUsuarios(id, nome, email, senha) {
    try {
        const dados = await usuariosModel.findByPk(id)

        if (!dados) {
            return {
                erro: 'usuario não encontrado'
            }
        }

        const compare = await bcrypt.compare(senha, dados.dataValues.senha)


        if (compare) {
            const update = await usuariosModel.update(
                {
                    nome: nome,
                    email: email,
                    senha: senha
                },
                { where: { id: id } }
            )
            return {
                dados: 'usuario atualizado com sucesso!'
            }
        } else {
            return {
                erro: 'senha ou usuario incorreta'
            }
        }

    } catch (erro) {
        console.log(erro)
        return {
            erro: erro.message
        }
    }
}

async function deleteUsuarios(idReq, senha) {
    try {
        const id = await usuariosModel.findByPk(idReq)

        if (!id) {
            return {
                erro: 'usuario não encontrado'
            }
        }

        const key = id.dataValues.senha

        const verifyKey = await bcrypt.compare(senha, key)

        if (verifyKey) {
            const remove = await usuariosModel.destroy({ where: { id: idReq} })
            return {
                mensagem: 'usuario deletado com sucesso'
            }
        }else{
            return {
                erro: 'Erro. ID ou senha estão incorretos.'
            }
        }
    } catch (erro) {
        console.log(erro)
        return {
            erro: erro.message
        }
    }
}

module.exports = {
    listarUsuarios,
    criarUsuario,
    atualizarUsuarios,
    deleteUsuarios
}