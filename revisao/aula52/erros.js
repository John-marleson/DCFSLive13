const { error } = require("node:console")

const objetoUsuario = {
    idade: 17,
    cnh: false
}

function validarUsuario(obj){
    try{
        if(obj.idade >= 18 & obj.cnh == true){
            return 'sucesso'
        }
        else{
            throw new Error
        }
    }catch(erro){
        console.log(erro.message)
        return 'erro'
    }
}

console.log(validarUsuario(objetoUsuario))