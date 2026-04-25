function manipularArray (callback, array){
    let novoArray = []
    for(let i = 0; i<array.length;i++){
        let novoElemento = callback(array[i])
        console.log(novoElemento)
        novoArray.push(novoElemento)
    }
}
function dobrar (item){
    return item*2
}
manipularArray(dobrar, [1, 2, 3])