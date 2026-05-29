import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products.js";
import Rating from "./Rating.jsx";

const ProductoDetalle = () => {
  //sirve para obtener el id del producto desde la URL y luego buscar el producto correspondiente en la lista de productos para mostrar sus detalles.
  const { id: productId } = useParams();
  // Buscar el producto correspondiente en la lista de productos
  const product = products.find((p) => p._id === productId);
  return (
    <>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Precio: ${product.price.toFixed(2)}</ListGroup.Item>
            <ListGroup.Item>Descripción: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Precio:</Col>
                  <Col>
                    <strong>${product.price.toFixed(2)}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Estado:</Col>
                  <Col>{product.countInStock > 0 ? "En Stock" : "Agotado"}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col className="rating">
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reseñas`}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Agregar al Carrito
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductoDetalle;
