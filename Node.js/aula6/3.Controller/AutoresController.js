const autoresService = require('../2.Services/AutoresServices')

async function getAutores (req, res) {

    const dados = await autoresService.listarTodosOsAutores()

    if(dados.erro){
        return res.status(404).json({
            erro: dados.erro
        })
    }
    
    return res.status(200).json({
        autores: dados
    })
}

async function getAutoresPorId (req, res) {
    const id = parseInt(req.params.id, 10)

    const dados = await autoresService.listarAutorPorId(id)

    if(dados.erro){
        return res.status(404).json({
            erro: dados.erro
        })
    }
    
    return res.status(200).json({
        autor: dados.autores
    })
}

module.exports = {
    getAutores,
    getAutoresPorId
}