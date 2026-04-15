let numeroUsuario = Number(prompt("digite um numero: "))
let numeroSorteado = 7
let numeroTentativas = 1

while(numeroUsuario != numeroSorteado){
    alert("voçê errou! tente novamente.")
    numeroUsuario = Number(prompt("digite um numero novamente: "))
    numeroTentativas++
}
console.log("parabens, voçê acertou!")