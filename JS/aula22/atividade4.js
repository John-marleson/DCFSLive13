let listaProdutos = [
    {   nome: "Camiseta",
        quantidade: 10,
        preco: 29.99,
        setor: 'vestuario'
    },
    {   nome: "Calça",
        quantidade: 5,
        preco: 49.99,
        setor: 'vestuario'   
    },
    { nome: "Notebook",
        quantidade: 3,
        preco: 89.99,
        setor: 'eletronicos'}
    ,
    {   nome: "Tênis",
        quantidade: 3,
        preco: 89.99  ,
        setor: 'calcados'  
    },
    {nome: "Celular",
        quantidade: 2,
        preco: 500.00,
        setor: 'eletronicos'
    },
    {   nome: "Jaqueta",
        quantidade: 2,
        preco: 99.99,
        setor: 'vestuario'
    },
    {   nome: "Mouse",
        quantidade: 2,
        preco: 99.99,
        setor: 'eletronicos'  
    },
    {   nome: "Teclado",
        quantidade: 2,
        preco: 99.99,
        setor: 'eletronicos'    
    },
    {   nome: "Aparelho de jantar",
        quantidade: 2,
        preco: 99.99,
        setor: 'utilidades domésticas'    
    }
]

//um array para eletronicos, vestuario e mobilia

let eletronicosVestuarioMobilha = listaProdutos.filter((item) => {
    if(item.setor == 'eletronicos' || item.setor == 'vestuario' || item.setor == 'utilidades domésticas'){
        return true
    }else{
        return false
    }
    return
})

console.log(listaProdutos)
console.log(eletronicosVestuarioMobilha)