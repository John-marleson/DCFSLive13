const loginServices = require('../2.services/loginService')

async function postLogin (req, res) {
    try {
        const {email, senha} = req.body

        const dados = await loginServices.loginUsuario(email, senha)

        if (dados.erro) {
            const statusCode = dados.erro == 'erro interno do sistema' ? 500:400
            res.status(statusCode).json({
                erro: dados.erro
            })
            return
        }

        res.status(200).json({
            status: 200,
            mensagem: dados.mensagem,
            token: dados.token
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