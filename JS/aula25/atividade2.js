const cadastro = document.getElementById('cadastro')

const nome = document.getElementById('nome')
const email = document.getElementById('email')
const cargo = document.getElementById('cargo')

const inputnome = document.getElementById('inputNome')
const inputemail = document.getElementById('inputEmail')
const inputcargo = document.getElementById('inputCargo')

const div = document.getElementById('perfil')
const img = document.getElementById('imagemPerfil')

cadastro.addEventListener('submit', (event)=>{
    event.preventDefault()

    const nomeintup = inputnome.value;
    const emailinput = inputemail.value;
    const cargoinput = inputcargo.value;

    nome.innerText += nomeintup
    cargo.innerText += cargoinput
    email.innerText += emailinput

    div.classList.remove('oculta')
    img.classList.remove('oculta')

    cadastro.reset()
})



