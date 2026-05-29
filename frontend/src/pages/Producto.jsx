import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Productos = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} />
        </Link>
      
      <Card.Body>
        <Card.Text>{product.name}</Card.Text>
        <Card.Text><strong>${product.price.toFixed(2)}</strong></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Productos;
