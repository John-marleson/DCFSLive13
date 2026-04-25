function calculadora(num1, num2, operacaoCallback) {
    let resultado = operacaoCallback(num1, num2)
    
    console.log(`A função de callback ${operacaoCallback.name} foi executada e os parametros foram ${num1} e ${num2} é o resultado é ${resultado}`);
}

//faça a invocação da função calculadora usando arrow functions para o seguinte caso:
//subtração dos números 50, 6
//divisão dos números 50, 2
//divisao dos números 50, 0


calculadora(50, 6, (num1, num2) => num1 - num2)
calculadora(50, 2, (num1,num2) => {
    if(num1 == 0 && num2 ==0){
        return `erro! divisão por zero`
    }else{
        num1/num2
    }
})
calculadora(50, 0, (num1,num2) => {
    if(num1 == 0 && num2 == 0){
        return `erro! divisão por zero`
    }else{
        return num1/num2
    }
})

let numeros = [1, 4, 6, 3]

numeros.forEach((itensArray) => {
    console.log(itensArray ** 2)
})