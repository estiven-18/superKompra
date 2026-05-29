import { Row, Col } from "react-bootstrap";
import products from "../products.js";
import Productos from "./Producto.jsx";

const Home = () => {
  return (
    <>
      <h1>Productos Destacados</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Productos product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
