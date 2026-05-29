import { Card } from "react-bootstrap";

const Productos = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} />
        </a>
      <Card.Body>
        <Card.Text>{product.name}</Card.Text>
        <Card.Text><strong>${product.price.toFixed(2)}</strong></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Productos;
