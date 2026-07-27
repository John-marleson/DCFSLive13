const usuariosServices = require('../2.services/usuariosServices')

async function getUsuarios(req, res) {
    try {
        const services = await usuariosServices.listarUsuarios()

        if (services.erro) {
            res.status(404).json({
                erro: services.erro
            })
            return
        }

        res.status(200).json({
            dados: services.dados
        })
    } catch (erro) {
        res.status(500).json({
            erro: 'esso inteno do servidor - controller'
        })
    }
}

async function postUsuarios(req, res) {
    try {
        const { nome, email, senha } = req.body

        const services = await usuariosServices.criarUsuario(nome, email, senha)

        if (services.erro) {
            res.status(400).json({
                erro: services.erro
            })
        }

        res.status(200).json({
            dados: services.dados
        })
    } catch (erro) {
        res.status(500).json({
            erro: 'erro interno do servidor - controller'
        })
    }
}
async function putUsuarios(req, res) {
    try {
        const id = parseInt(req.params.id, 10)
        const { nome, email, senha } = req.body

        const putUsers = await usuariosServices.atualizarUsuarios(id, nome, email, senha)

        if (putUsers.erro) {
            res.status(404).json({
                erro: putUsers.erro
            })
        }

        res.status(200).json({
            dados: putUsers.dados
        })
    } catch (erro) {
        res.status(500).json({
            erro: 'erro interno do servidor - controller - put'
        })
    }
}

async function deleteUsuarios(req, res) {
    try {
        const id = parseInt(req.params.id)
        const { senha } = req.body

        const deleteUsers = await usuariosServices.deleteUsuarios(id, senha)

        if (deleteUsers.erro) {
            res.status(400).json({
                erro: deleteUsers.erro
            })
        }

        res.status(200).json({
            dados: deleteUsers.dados
        })
    } catch (erro) {
        res.status(500).json({
            erro: 'erro interno do servidor - controller'
        })
    }
}
module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
}