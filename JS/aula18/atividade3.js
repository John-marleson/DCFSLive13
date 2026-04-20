//busca de informações e exclusão no meio do array
let dataAgen = ["01/04", "02/04", "03/04", "04/04", "05/04", "06/04", "07/04", "08/04", "09/04", "10/04"]
let dataRemovida = []
let dataAremover = ["05/04", "08/04", "09/04"]

for(let i = 0;i<=dataAremover.length;i++){
    let indice = dataAgen.indexOf(dataAremover[i])
    if(indice !== -1){
        dataRemovida.push(dataAgen.splice(indice, 1)[0])
    }
}
console.log(`datas disponiveis: ${dataAgen}`)
console.log(`datas removidas: ${dataRemovida}`)