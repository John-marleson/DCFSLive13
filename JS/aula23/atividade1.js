let elemento = document.getElementsByTagName('p')
elemento[1].style.backgroundColor = 'blue'

let elementoId = document.getElementById('especial')
elementoId.style.backgroundColor = 'blue'

let elementoClass = document.getElementsByClassName('borda')

for(let i = 0; i < elementoClass.length;i++){
    elementoClass[i].style.border = 'blue 2px solid'
}