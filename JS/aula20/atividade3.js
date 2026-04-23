function somar (a, b){
    return a + b
}
function subtrair (a, b){
    return a - b
}
function multiplicar (a, b){
    return a*b
}
function dividir (a, b){
    if(a > 0 && b > 0){
        return a/b
    }else{
        return `erro! voçê tentou fazer uma divisão por 0.`
    }
}
let num1 = 4
let num2 = 0
console.log(somar(num1, num2))
console.log(subtrair(num1, num2))
console.log(multiplicar(num1, num2))
console.log(dividir(num1, num2))