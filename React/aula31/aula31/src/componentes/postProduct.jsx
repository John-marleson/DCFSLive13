import { useState, useEffect } from "react"

function CriarProduto(){

    const [title, setTitle] = useState('')
    const [price, setprice] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
    const [image, setimage] = useState('')

    const [botao, setBotao] = useState(0)

    const [produto, setProduto] = useState({})
    const [resp, setResposta] = useState('')

    function submitForm(event){
        event.prevenDefalt();

        /* "id": 0,
        "title": "string",
        "price": 0.1,
        "description": "string",
        "category": "string",
        "image": "http://example.com"
        } */

        setProduto({
            title: title,
            price: price,
            description: description,
            category: category,
            image: image
        })

        setBotao(botao + 1)

        setTitle('')
        setprice('')
        setdescription('')
        setcategory('')
        setimage('')
    }

   useEffect(()=>{
    async function enviarForm(){
        try{
            setResposta('')

            const resposta = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(produto)
            })

            const dados = await resposta.json()

            setResposta(dados)

            setProduto('')
        }catch(erro){
            console.log(`erro na requisição api - ${erro}`)
        }
    }
    enviarForm()
   }, [botao])


    return(<>
    
    <form onSubmit={submitForm} >

        <input type="text" placeholder="nome" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <input type="number" placeholder="preço" value={price} onChange={(e)=> setprice(e.target.value)}/>
        <input type="text" placeholder="descrição" value={description} onChange={(e)=> setdescription(e.target.value)}/>
        <input type="text" placeholder="categoria" value={category} onChange={(e)=> setcategory(e.target.value)}/>
        <input type="text" placeholder="imagem" value={image} onChange={(e)=> setimage(e.target.value)}/>

        <button>criar</button>
        
    </form>

    {resp && <p>{JSON.stringify(resp)}</p>}

    </>)
}

export default CriarProduto;