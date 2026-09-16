const form = document.getElementById('form')
const nome = document.getElementById('nome')
const senha = document.getElementById('senha')
const submit = document.getElementById('submit')
const token = document.getElementById('token')


async function desafio(nome, senha) {
    try {
        const consumo = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            username: nome,
            password: senha
            })
        })

        const resposta = await consumo.json()

        if(resposta.token){
            const divFilha = document.createElement('p')
            divFilha.innerText = resposta.token
            token.appendChild(divFilha)
        }else{
            console.log('erro')
        }

    } catch (erro) {
        console.log('erro no consuumo da api' + erro)
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    desafio(nome.value, senha.value)
    
    nome.innerText = ''
    senha.innerText = ''
})