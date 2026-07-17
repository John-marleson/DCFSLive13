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

async function livrosServiceJoin (id) {
    try {
        const livrosAll = await LivrosModel.findByPk(id)

        if (!livrosAll) {
            return {
                erro: 'livros não encontrados'
            }
        }

         const livrosJoin = await LivrosModel.findAll({
            include:[{
                model: LivrosModel,
                attributes: ['autor_id', 'categoria_id']
            }]
        })


        return { join: livrosJoin }
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

async function criarLivro () {
    try{
        const livroCriar = await LivrosModel.create()

        if(!livroCriar){
            return {
                erro: 'não foi possivel criar o livro.'
            }
        }

        return {livro: livroCriar.dataValues}
    }catch(erro){
        console.log(erro)
        return{
            erro: erro.message
        }
    }
}

module.exports = {
    livrosServiceAll,
    livrosServiceId,
    livrosServiceJoin
}