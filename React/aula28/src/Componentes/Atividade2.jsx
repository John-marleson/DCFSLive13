export default function RetornarDesconto (){
    let produtos = [
        {nome:'Maça', preco: 4.50, categoria: 'frutas'},
        {nome:'Banana',preco: 3.20,categoria: 'frutas'},
        {nome:'Laranja',preco: 3.80,categoria: 'frutas'}
    ]
    
    function calcularDesconto (){
        let x = prompt('digite o desconto que deseja verificar:')
        return produtos[0].preco * x
    }

    return (
        <>
        <p>desconto da maçã: {produtos.preco * 0.90}</p>
        <p>desconto a sua escolha: {calcularDesconto()}</p>
        </>
    )
}