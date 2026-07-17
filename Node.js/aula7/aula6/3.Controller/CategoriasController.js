const categorias = require('../2.Services/CategoriasServices')

async function getCategorias(req, res) {
    const dados = await categorias.listarTodasCategorias()

    if (dados.erro) {
        return res.status(404).json({
            erro: dados.erro
        })
    }
    return res.status(201).json({
        status: 201,
        categorias: dados.categorias
    })
}

async function getCategoria(req, res) {
    try {
        const id = parseInt(req.params.id, 10)

        const dados = await categorias.listarUmaCategoria(id)

        if (dados.erro) {
            res.status(404).json({
                erro: dados.erro
            })
            return
        }
        return res.status(200).json({
            status: 200,
            categoria: dados.categoria
        })
    } catch (erro) {
        return res.status(500).json({
            erro: 'erro interno do servidor'
        })
    }
}

async function postCategoria(req, res) {
    try {
        const reqBody = req.body

        const criar = await categorias.adicionarCategoria(reqBody)

        if (criar.erro) {
            return res.status(404).json({
                erro: criar.erro
            })
        }
        res.status(200).json({
            sucesso: 'item criado com sucesso!'
        })
    }
    catch (erro) {
        return res.status(500).json({
            erro: 'erro interno do servidor'
        })
    }
}

async function putCategoria (req, res) {
    try{
        const id = parseInt(req.params.id)
        const reqBody = req.body

        const atualizar = await categorias.atualizarCategoria(id, reqBody)

        if(atualizar.erro){
            return res.status(404).json({
                erro: atualizar.erro
            })
        }

        res.status(200).json({
            sucesso: 'item atualizado com sucesso'
        })
    }catch(erro){
        return res.status(500).json({
            erro: 'erro interno do servidor'
        })
    }
}

async function deleteCategoria (req, res) {
    try{
        const id = parseInt(req.params.id)

        const destroy = await categorias.removerCategoria(id)

        res.status(200).json({
            sucesso: 'item deletado.'
        })
    }catch(erro){
        return res.status(500).json({
            erro: 'erro interno do servidor'
        })
    }
}

module.exports = {
    getCategorias,
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}