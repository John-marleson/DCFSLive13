const { sensitiveHeaders } = require("node:http2")

function maior(a, b, c, d){
    if(a > b && a > c && a > d){
        return `o numero ${a} foi o maior`
    }
    if(b > a && b > c && b > d){
        return `o numero ${b} foi o maior`
    }
    if(c > a && c > b && c > d){
        return `o numero ${c} foi o maior`
    }
    if(d > a && d > b && d > c){
        return `o numero ${d} foi o maior`
    }
}

function menor(a, b, c, d){
    if(a < b && a < c && a < d){
        return `o numero ${a} foi o menor`
    }
    if(b < a && b < c && b < d){
        return `o numero ${b} foi o menor`
    }
    if(c < a && c < b && c < d){
        return `o numero ${c} foi o menor`
    }
    if(d < a && d < b && d < c){
        return `o numero ${d} foi o menor`
    }
}

function verificar(a, b, c, d, operacao1, operacao2){
    const maior = operacao1(a, b, c, d)
    const menor = operacao2(a, b, c, d)

    const array = []

    array.push(maior)
    array.push(menor)

    return array
}

const objUsuario = {
    nome: 'john',
    email: 'john@gmail.com',
    senha: 'JOHNjohn28'
}

function login(obj, senha){
    const resultado = obj.senha == senha ? 'sucesso':'senha incorreta'
    return resultado
}

console.log(login(objUsuario, '12345'))
console.log(login(objUsuario, 'JOHNjohn28'))