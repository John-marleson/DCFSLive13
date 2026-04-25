function calculadora (num1, num2, operacao){
    if(operacao == 'soma'){
        return num1 + num2
    }else if(operacao == 'subtração'){
        return num1 - num2
    }else if(operacao == 'multiplicação'){
        return num1 * num2
    }else if(operacao == 'divisão'){
        if(num1 == 0 || num2 == 0){
            return `erro! não foi possível realizar a operação`
        }else{
          return num1 / num2  
        }
    }else{
        return `${operacao} não é uma operação valida!!`
    }
}
let num1 = Number(prompt("digite o primeiro numero:"))
let num2 = Number(prompt("digite o primeiro segundo:"))
let operacao = prompt("digite a operação:")
console.log(calculadora(num1, num2, operacao))