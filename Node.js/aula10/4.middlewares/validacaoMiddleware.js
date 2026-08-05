async function validarUsuario (req, res, next) {
    try{
        const { nome, email, senha } = req.body

        if(!nome || !email || !senha){
             res.status(400).json({
                erro: 'Nome, email e senha são atributos obrigatorios para o criação do usuario'
            })
            return
        }

        next()
    }catch(erro){
        res.status(500).json({
            erro: 'erro ao validar o login'
        })
        return
    } 
}

async function validarPut(req, res, next) {
    try{
        const id = parseInt(req.params.id)
        const { nome, email, senha } = req.body

        if(!id || id == NaN){
            res.status(400).json({
                erro: 'id é um atributo obrigatorio para a atualização do usuario e deve ser introduzido como um numero inteiro'
            })
            return
        }
        if(!nome || !email  || !senha){
            res.status(400).json({
                erro: 'id, nome, email e senha são atributos obrigatorios'
            })
            return
        }

        next()
    }catch(erro){
        res.status(500).json({
            erro: 'erro ao validar a atualização de usuario'
        })
        next()
    } 
}

async function validarLogin (req, res, next) {
    try{
        const { email, senha} = req.body

        if(!email || !senha){
            res.status(400).json({
                erro: 'Nome, email e senha são atributos obrigatorios para o criação do usuario'
            })
            return
        }

        next()
    }catch(erro){
        res.status(500).json({
            erro: 'erro ao validar o login'
        })
        return
    } 
}

module.exports = {
    validarUsuario,
    validarLogin,
    validarPut,
    validarDelete
}