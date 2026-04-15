let idade = prompt("Qual a sua idade?")
let carteira = prompt("voçê tem carteira de motorista?")
let credito = prompt("qual a sua quantidade de credito?")

if(idade >= 18){
    alert("idade aprovada!")
}else if(carteira === "sim"){
    alert("carteira aprovada!")
}else if(credito >= 500){
    alert("credito aprovado!")
}else if(idade < 18  || carteira !== "sim" || credito < 500){
    alert("voçê não pode dirigir!")
}else{
    alert("4.0.4")
}