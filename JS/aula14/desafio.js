function calcImc (peso, altura){
    let multiplicação = altura * altura
    let IMC = peso / multiplicaçã
}
let IMC = calcImc(55, 1.78)
console.log(`o seu IMC é igual á: ${IMC}`)
    if(IMC < 18.5){
        console.log("Abaixo do peso")
    }else if(IMC >= 18.5 && IMC <= 25){
        console.log("peso normal!")
    }else if(IMC > 25 && IMC < 30){
        console.log("acima do peso!")
    }else if(IMC >= 30){
        console.log("obeso!")
    }