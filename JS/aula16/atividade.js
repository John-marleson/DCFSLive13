let dia1 = Number(prompt("Digite o dia da primeira data:"))
let mes1 = Number(prompt("Digite o mes da primeira data:"))
let ano1 = Number(prompt("Digite o ano da primeira data:"))

let dia2 = Number(prompt("Digite o dia da segunda data:"))
let mes2 = Number(prompt("Digite o mes da segunda data:"))
let ano2 = Number(prompt("Digite o ano da segunda data:"))

let estruturaData1 = (dia1 + '/' + mes1 + '/' + ano1)
let estruturaData2 = (dia2 + '/' + mes2 + '/' + ano2)

if (ano1 > ano2){
    console.log(estruturaData2 + ", " + estruturaData1)
}else if(ano2 > ano1){
    console.log(estruturaData1 + ", " + estruturaData2)
}else{
    if(mes1 > mes2){
        console.log(estruturaData2 + "," + estruturaData1)
    }else if(mes2 > mes1){
        console.log(estruturaData1 + ", " + estruturaData2)
    }else{
        if(dia1 > dia2){
            console.log(estruturaData2 + ", " + estruturaData1)
        }else{
            console.log(estruturaData1 + ", " + estruturaData2)
        }
    }
}
