// Crie um array vazio chamado aluno 
// Peça 3 notas e um nome para o usuário. Adicione todas essas informações em um array.
let aluno = []
let soma = 0
let media = 0

for(let i=1;i<=3;i++){
    aluno[i] = Number(prompt(`digite a ${i}° nota:`))
    soma += aluno[i]
}
console.log(`as notas dos alunos foi de:
1° aluno: ${aluno[1]}
2° aluno: ${aluno[2]}
3° aluno: ${aluno[3]}`)
    media = soma/3
console.log(`a media dos alunos foi igual a ${media}`)