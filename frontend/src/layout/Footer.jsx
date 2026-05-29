import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <Container fluid className="bg-dark text-white py-3">
          <Row>
            <Col p-5 className="text-center">
              SuperKompra
            </Col>
            <Col p-5 className="text-center">&copy; {currentYear} SuperKompra. All rights reserved.</Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
