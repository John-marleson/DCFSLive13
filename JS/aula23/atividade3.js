function cadastrarInfos(){
    const nome = prompt("digite seu nome:")
    const email = prompt('digite seu email:')
    const cargo = prompt("digite seu cargo")
    const imagem = prompt("anexe o url da sua imagem:")

    const imagem2 = document.getElementsByTagName('div')[0]
    imagem2[0].innerHTML += `<img scr="${imagem}" alt="">`
    const nome2 = document.getElementsByTagName('div')[0]
    nome2[0].innerHTML += `<p>nome: ${nome}</p>`
    const email2 = document.getElementsByTagName('div')[0]
    email2[0].innerHTML += `<p>email: ${email}</p>`
    const cargo2 = document.getElementsByTagName('div')[0]
    cargo2[0].innerHTML += `<p>cargo: ${cargo} </p>`
}