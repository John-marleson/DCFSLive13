import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduto({index, img, title, price, description}) {
  return (
    <Card index={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">adicionar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduto;

