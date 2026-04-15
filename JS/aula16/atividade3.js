let senha = 1234
let senhaBanco = prompt("digite a senha de 4 digitos:")
let numeroTentativas = 1

while(senha != senhaBanco && numeroTentativas <= 4){
    console.log("senha incorreta!")
    senhaBanco = prompt("digite a senha novamente:")
    numeroTentativas++
}
if(senhaBanco == senha){
        console.log("acesso liberado!")
    }else{
        console.log("numero de tentativas esgotado!")
    }