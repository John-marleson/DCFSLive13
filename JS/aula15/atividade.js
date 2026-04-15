let idade = Number(prompt("Digite sua idade: "))

if(idade > 18 && idade < 100){
    console.log("pode dirigir!")
}else if (idade < 18 && idade > 0){
    console.log("apenas carona!")
}else{
    console.log("Digite uma idade valida!")
}