let peso = Number(prompt("Digite o seu peso: "))
let altura = Number(prompt("Digite a sua altura: "))

let multiplicação = altura * altura
let IMC = peso / multiplicação
console.log("o seu IMC deu: " + IMC)

if(IMC < 18.5){
    console.log("Abaixo do peso")
}else if(IMC >= 18.5 && IMC <= 25){
    console.log("peso normal!")
}else if(IMC > 25 && IMC < 30){
    console.log("acima do peso!")
}else if(IMC >= 30){
    console.log("obeso!")
}