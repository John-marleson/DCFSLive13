const fs = require('fs')

const arquivo1 = fs.readFileSync('./arquivo1.txt', 'utf8', (err, dados)=>{
    if(err) throw new err
    console.log('arquivo lido com sucesso!')
})

const arquivo2 = fs.readFileSync('./arquivo2.txt', 'utf8', (err, dados)=>{
    if(err) throw new err
    console.log('arquivo lido com sucesso!')
})

const concatenar = fs.writeFileSync('./arquivo3.txt', arquivo1 + arquivo2, (err, dados)=>{
    
})
console.log(concatenar)