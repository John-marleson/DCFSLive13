let usuarioJSON = '{"nome": "Maria", "idade": 25, "cidade": "Rio de Janeiro", "email": "maria@email", "telefone": "123456789"}';
let usuarioConvert = JSON.parse(usuarioJSON)
console.log(usuarioConvert)

usuarioConvert.email = "maria.novo@gmail"
console.log(usuarioConvert)
usuarioConvert.telefone = 987654321
console.log(usuarioConvert)

usuarioJSON = JSON.stringify(usuarioConvert)
console.log(usuarioJSON)