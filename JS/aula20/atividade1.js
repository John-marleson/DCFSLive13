function verificarIdade (nome, idade){
    nome = prompt("qual seu nome?")
    idade = Number(prompt("qual a sua idade?"))
    if(idade>=10){
        console.log('seja bem vindo')
    }else if(idade < 10 && idade > 0){
        console.log("acesso negado, local restrito para maiores de 10 anos!!")
    }else{
        console.log("digite uma idade valida!!")
    }
}
console.log(verificarIdade())