//você foi contratado para criar o sistema de atendimento do dr. Cleitinho, um médico muito famoso que tem uma agenda lotada de pacientes. Esse sistema é para a nova unidade que conta com um sistema de emergêcia. 

//são 2 filas: atendimento normal e atendimento de prioritário. 
//pessoas com mais de 60 anos, gestantes e pessoas com deficiência tem direito ao atendimento prioritário.
//todas as outras pessoas entram na fila de atendimento normal.

//situações de emergência, como acidentes, infartos, etc, tem prioridade máxima e devem ser atendidos imediatamente, independentemente da fila em que estejam. Essa pessoa será adicionada no início da fila de atendimento prioritário

let atendimentoNormal = ["João", "Maria", "Pedro", "Ana", "Lucas"];
let atendimentoPrioritario = ["Sr. Silva", "Sra. Oliveira", "Sra. Santos"];

//adicione Sra Iracema no atendimento prioritário
atendimentoPrioritario.push("Sra. Iracema");
// Leia 3 nomes e verifique se eles estão na fila de atendimento normal ou prioritário, faça as inclusões
alert("Cadastro de usuarios")
let quantidade = Number(prompt("digtite a quantidade de pessoas/ usuarios a serem cadastrados:"))
for(let i = 1;i<=quantidade;i++){
    let nome = prompt("digite o nome do usuario:")
    let c =confirm("o usuario tem mais de 60 anos é gestante ou possui algum tipo de deficiencia? aperte em OK caso alguma dessas opções forem verdadeiras.")

    if(c){
        atendimentoPrioritario.push(nome)
    }
    else{
        atendimentoNormal.push(nome)
    }
}
console.log(`Lista de atendimento normal: ${atendimentoNormal}`)
console.log(`Lista de atendimentos prioritarios: ${atendimentoPrioritario}`)

alert("Dr. cleitinho sofreu um acidente, precisa ser atendido urgente!!")
atendimentoPrioritario.unshift("Dr. cleitinho")
console.log(`Lista atualizada: ${atendimentoPrioritario}`)

//PUSH - ADICIONA NO FINAL DO ARRAY
//UNSHIFT - ADICIONA NO INÍCIO DO ARRAY

//TODO ATENDIMENTO FEITO DEVE REMOVER O NOME DO PACIENTE DA FILA E ADICIONAR NA FILA DE ATENDIMENTO REALIZADO
let atendimentoRealizado = [];

//cleitinho jr será atendido antes de todas as pessoas. Remova ele do inicio da fila de atendimento prioritário e adicione na fila de atendimento realizado
// Serão chamadas + 5 pessoas, os números ímpares serão para atendimento prioritário e os números pares para atendimento normal, lembre-se deve ser removido da fila de atendimento e adicionado na fila de atendimento realizado, sempre do início da fila.

//SHIFT - REMOVE DO INÍCIO DO ARRAY
//SPLICE - REMOVE DO MEIO DO ARRAY
//POP - REMOVE DO FINAL DO ARRAY
let quantidadeAtendimentos = Number(prompt("quantos atendimentos foram realizados?"))

for(let i = 1;i<=quantidadeAtendimentos;i++){
    let confirmar = prompt(`o ${i}° atendimento foi 'normal' ou 'prioridade'?`)
    let adicionar
    if(confirmar == "normal"){
        adicionar = atendimentoNormal.shift()
        atendimentoRealizado.push(adicionar)
    }else if(confirmar == "prioridade"){
        adicionar = atendimentoPrioritario.shift()
        atendimentoRealizado.push(adicionar)
    }else{
        alert("digite somente 'normal' ou 'prioridade'!!")
    }
}
console.log(`atendimentos realizados: ${atendimentoRealizado}`)