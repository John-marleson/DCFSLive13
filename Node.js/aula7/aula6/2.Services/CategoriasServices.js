const { where } = require('sequelize')
const { CategoriasModel } = require('../1.Modelos/relacionamentos')
const { format } = require('sequelize/lib/utils')
//importar sempre o modelo do arquivo relacionamentos, pois ele contém as referencias para os modelos que armazenam as referencias para as chaves estrangeiras e os relacionamentos/cardinalidades 

//operações possiveis para realizar no banco
//CRUD
async function listarTodasCategorias() {
     //definindo como uma função assincrona podemos usar a estrutura await
     try {
          const categorias = await CategoriasModel.findAll()

          const dados = categorias.map((categoria) => categoria.dataValues)
          
          return { categorias: dados}
     }
     catch (error) {
          console.log(error)
          return { erro: error.message }
     }

}
listarTodasCategorias()

async function listarUmaCategoria(id) {
     try {
          const categoria = await CategoriasModel.findByPk(id)

          if (!categoria) {
               return {
                    erro: 'objeto não encontrado'
               }
          }
          return { categoria: categoria.dataValues }
     } catch (erro) {
          console.log(erro)
          return { erro: erro.message }
     }
}


async function adicionarCategoria(objeto) {
     try {
          const criar = await CategoriasModel.create(objeto)

          

          return { categoria: criar.dataValues }
     } catch (erro) {
          console.log(erro)
          return { erro: erro.message }
     }
}

async function atualizarCategoria(id, objeto) {
     try {
          /* faz a atualização no banco de dados e retorna um array */
          /* o array [modArray] recebe qualquer alteração no obj original*/ 
          const [modArray] = await CategoriasModel.update(
               objeto,
               { where: { id_categoria: id } }
          )
          /* verifica de o array foi modificado */
          if (modArray == 0) {
               return { erro: 'não foi possivel atualizar o item' }
          }

          /* parte de viizualização do usuario */
          const itemPk = CategoriasModel.findByPk(id)
          /* retorna o objeto modificado */
          return { categoria: itemPk.dataValues }
     } catch (erro) {
          console.log(erro)
          return { erro: erro.message }
     }
}

async function removerCategoria(id) {
     try {
          const remover = await CategoriasModel.destroy({ where: { id_categoria: id } })
          return {
               remove: 'item removido com sucesso!'
          }
     } catch (erro) {
          console.log(erro)
          return { erro: erro.message }
     }
}

removerCategoria(115)


module.exports = {
     listarTodasCategorias,
     listarUmaCategoria,
     adicionarCategoria,
     atualizarCategoria,
     removerCategoria
}