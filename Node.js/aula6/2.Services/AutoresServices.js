const { AutoresModel } = require('../1.Modelos/relacionamentos')

async function listarTodosOsAutores() {
    //definindo como uma função assincrona podemos usar a estrutura await
    try {
        const autores = await AutoresModel.findAll()

        const dados = autores.map((autores) => autores.dataValues)

        if(!dados){
            return {
                erro: 'objeto não encotrado'
            }
        }

        return { dados: dados }
    }
    catch (error) {
        console.log(error)
        return { erro: error.message }
    }

}

async function listarAutorPorId(id) {
    try {
        const autorId = await AutoresModel.findByPk(id)

        if (!autorId) {
            return { erro: 'autor não encontrado' }
        }
        
        return { autores: autorId.dataValues }
    } catch (erro) {
        console.log(erro)
        return { erro: erro.message }
    }
}

/* listarAutorPorId(2) */

module.exports = { listarTodosOsAutores, listarAutorPorId }