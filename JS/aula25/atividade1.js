const div = document.querySelector('div')
const button1 = document.querySelector('#vermelho')
const button2 = document.querySelector('#verde')
const button3 = document.querySelector('#azul')

div.addEventListener('mouseover', ()=>{
    div.style.backgroundColor = (div.style.backgroundColor == 'black' ? 'white':'black')
})
button1.addEventListener('click', ()=>{
    div.style.backgroundColor = 'red'
})
button2.addEventListener('click', ()=>{
    div.style.backgroundColor ='green'
})
button3.addEventListener('click', ()=>{
    div.style.backgroundColor = 'blue'
})

const planoFundo = document.querySelector('#diaEnoite')
const body = document.querySelector('body')

planoFundo.addEventListener('click', ()=>{
    body.style.backgroundColor = (body.style.backgroundColor == 'white') ? 'blue':'white'
    body.style.color = (body.style.color == 'black') ? 'white':'black'
})