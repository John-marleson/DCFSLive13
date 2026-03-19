/* Uma escola quer um sistema para verificar a aprovação dos alunos. O sistema deve receber a média de um aluno . 
Se a média for maior ou igual a 7, o aluno é aprovado.
Se a média for maior ou igual a 4 e menor que 7 o aluno está em recuperação.
Caso contrário, o aluno é reprovado ( media abaixo 4).
O sistema deve exibir a média e a situação do aluno (aprovado ou reprovado) no console ou no alert.*/

let media = Number(prompt("Digite a media do aluno: "))

if(media >= 7){
    alert("o aluno em questão foi aprovado!")
    console.log("o aluno foi aprovado!")
}else if(media >= 4){
    alert("o aluno esta de recuperação")
    console.log("o aluno esta de recuperação!")
}else if(media < 4){
    alert("o aluno foi reprovado!")
    console.log("o aluno foi reprovado!")
}