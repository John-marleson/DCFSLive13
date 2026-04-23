let aluno = {
    nome: "john",
    diciplina: 'matematica',
    media: function(notas){
        notas = prompt
        for(let i = 1; i<= 3;i++){
            soma += nota
        }
        media = soma/notas.length
        return media
    },
    situacao: function (){
        if(this.media >= 7 && this.media <= 10){
            return `aprovado`
        }else if(this.media < 7 && this.media > 5.5){
            return `em recuperação`
        }else if(this.media < 5.5 && this.media >= 0){
            return `reporvado`
        }else{
            return `erro!`
        }
    }
}
let notas = 7, 4, 9
aluno.media = 7, 8, 9
console.log(aluno)
