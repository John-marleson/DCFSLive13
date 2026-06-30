import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function CardProduto({imagem, nome, preco, descricao}) {
    const [count, setCount] = useState(1)

    function adicionar (count){
                setCount(count + 1)
    }
    function decrementar (count){
                setCount(count - 1)
    }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          {descricao}
        </Card.Text>
        <Card.Text>
           R$ {preco}
        </Card.Text>
        <h1>{count}</h1>
        <Button onClick={adicionar} disabled={count >= 10}>adicionar</Button>
        <Button onClick={decrementar} disabled={count <= 1}>remover</Button>
      </Card.Body>
    </Card>
  );
}