import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useContext } from 'react';
import { CarrinhoContexto } from '../contexto/CarrinhoContext';

function CardProduct({id, nome, descricao, preco, imagem }) {

  const { AdicionarCarrinho } = useContext(CarrinhoContexto)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          {descricao}
        </Card.Text>
        <p>{preco}</p>
        <Button variant="primary" onClick={() => AdicionarCarrinho(id, nome, descricao, preco, imagem)}>comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;