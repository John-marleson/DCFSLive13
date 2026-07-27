const loginServices = require('../2.services/loginService')

async function postLogin (req, res) {
    try {
        const {email, senha} = req.body

        const dados = await loginServices.loginUsuario(email, senha)

        if (dados.erro) {
            res.status(404).json({
                erro: dados.erro
            })
        }
        if (dados.erro == 'erro interno do sistema') {
            res.status(500).json({
                erro: dados.erro
            })
        }
        res.status(200).json({
            sucesso: dados.sucesso
        })
    } catch (erro) {
        res.status(500).json({
            erro: 'erro interno do sistema'
        })
    }
}

module.exports = {
    postLogin
}