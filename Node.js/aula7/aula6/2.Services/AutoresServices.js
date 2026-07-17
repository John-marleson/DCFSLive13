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

const objeto = {
            nome: 'john',
            nacionalidade: 'brasileiro',
            data_nacimento: '2006-28-10'
        }

async function criarAutor (objetoAutor){
    try{
        const criarAutor = await AutoresModel.create({
            nome: objetoAutor.nome,
            nacionalidade: objetoAutor.nacionalidade,
            data_nacimento: objetoAutor.data_nascimento
        })

        if(criarAutor.nome == null || criarAutor.nacionalidade == null || criarAutor.data_nacimento == null){
            return {
                erro: 'não foi possivel criar o autor. campos: nome, nacionalidadde e data_nascimento são obrigatorios'
            }
        }else if(criarAutor.dataValues){
            console.log(criarAutor)
            return {autor: criarAutor.dataValues}
        }else{
            return {
                erro: 'autor não criado'
            }
        }

    }catch(erro){
        return {
            erro: erro.message
        }
    }
}

criarAutor(objeto)
/* listarAutorPorId(2) */

module.exports = { listarTodosOsAutores, listarAutorPorId, criarAutor }