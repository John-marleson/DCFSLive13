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

async function postAutores (req, res){
    const reqBody = req.body

    const postAutor = await autoresService.criarAutor(reqBody)

    if(postAutor.erro == 'não foi possivel criar o autor. campos: nome, nacionalidadde e data_nascimento são obrigatorios'){
        res.status(404).json({
            erro: postAutor.erro
        })
    }

    res.status(200).json({
        sucesso: 'autor criado com sucesso'
    })
}

module.exports = {
    getAutores,
    getAutoresPorId,
    postAutores
}