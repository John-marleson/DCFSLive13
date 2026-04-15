let contador = Number(1)
let soma = 0
let quantNum = 5

while(contador <= quantNum){
    let num = Number(prompt(`Digite o ${contador}º número:`))
    soma += num
    contador++
}