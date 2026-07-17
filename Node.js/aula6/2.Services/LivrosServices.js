const { LivrosModel } = require('../1.Modelos/relacionamentos');

async function livrosServiceAll() {
    try {
        const livrosAll = await LivrosModel.findAll()

        if (!livrosAll) {
            return {
                erro: 'livros não encontrados'
            }
        }
        return { livros: livrosAll }
    } catch (erro) {
        console.log(erro)
        return { erro: erro.message }
    }
}

async function livrosServiceInclude () {
    try {
        const livrosAll = await LivrosModel.findAll()

        if (!livrosAll) {
            return {
                erro: 'livros não encontrados'
            }
        }
        return { livros: livrosAll }
    } catch (erro) {
        console.log(erro)
        return { erro: erro.message }
    }
}

async function livrosServiceId(id) {
    try {
        const livrosId = await LivrosModel.findByPk(id)

        if (!livrosId) {
            return {
                erro: '404 Not Found'
            }
        }
        console.log(livrosId.dataValues)

        return { livros: livrosId.dataValues }
    } catch (erro) {
        console.log(erro)
        return { erro: erro.message }
    }
}
/* livrosServiceAll() */
livrosServiceId(1)

module.exports = {
    livrosServiceAll,
    livrosServiceId
}