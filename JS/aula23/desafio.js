
function organizarAtividade(){
    let pergunta = prompt('a atividade é normal ou prioridade?')
    let descricao = prompt('descreva sua atividade:') 
    if(pergunta == 'normal'){
        const id = document.getElementById('normal')
        id.innerHTML+= `<li>${descricao}</li>`
    }
    else if(pergunta == 'prioridade'){
        const id2 = document.getElementById('prioridade')
        id2.innerHTML+= `<li>${descricao}</li>`
    }else{
        alert(`${pergunta} não é uma resposta valida`) 
    }
}