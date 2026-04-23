function verificarArray (Array = []){
    let tamanho = Array.length
    console.log(`Existem ${tamanho} itens na lista.`)
    for(let i=0;i<=tamanho;I++){
        console.log(`item ${i + 1}: ${Array[i]}`)
    }
}
verificarArray()