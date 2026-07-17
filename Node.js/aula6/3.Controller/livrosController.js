const { listarAutorPorId } = require('../2.Services/AutoresServices')
const LivrosServices = require('../2.Services/LivrosServices')

async function getLivrosAll(req, res) {
    try {
        const livrosAll = await LivrosServices.livrosServiceAll()

        if (livrosAll.erro) {
            return res.status(404).json({
                erro: livrosAll.erro
            })
        }

        return res.status(200).json({
            livros: livrosAll.livros
        })
    } catch (erro) {
        return res.status(500).json({
            erro: livrosAll.erro
        })
    }
}

async function getLivrosPorId (req, res) {
    try{
    const id = parseInt(req.params.id, 10)

    const livrosId = await LivrosServices.livrosServiceId(id)

    if(livrosId.erro){
        return res.status(404).json({
            erro: livrosId.erro
        })
    }

    return res.status(200).json({
        livro: livrosId.livros
    })
}catch(erro){
    return res.status(500).json({
        erro: 'erro interno do servidor'
    })
}
}

module.exports = {
    getLivrosAll,
    getLivrosPorId
}