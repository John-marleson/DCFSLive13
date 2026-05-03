let lista = document.getElementsByTagName('li')
let lista2 = Array.from(lista)
let x = lista2.forEach((element, index) => {
    if(index <= 4){
        return element.innerText += ' disponivel'
    }else{
        return element.innerText += ' indisponivel'
    }
});
