const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../.env'})

async function autenticarToken(req, res, next) {
    try{
        const token = req.headers.authorization.split(' ')[0]
        const verifyToken = jwt.verify(token, process.env.PALAVRA_SECRETA_JWT, (erro, payload) =>{
            res.status(400).json({
                erro: 'token invalido'
            })
        })

        req.infoUsuario = payload

        next()
    }catch(erro){
        return res.status(401).json({
            erro: 'token invalido'
        })
    }
}
module.exports = autenticarToken;