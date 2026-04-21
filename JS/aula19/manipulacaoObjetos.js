let aluno = {
    nome:"João",
    idade:20,
    curso:"Engenharia",
    notas:[8, 9, 7],
    turno:"matutino",
    responsavel:"Maria"
}
aluno.nome = "joao silva de sousa"
console.log(aluno)

aluno.matricula = "2021001"
console.log(aluno)

aluno.media = "8"
console.log(aluno)

delete aluno.responsavel;
console.log(aluno)