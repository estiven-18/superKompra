import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col bg="dark" text="white">
              SuperKompra
            </Col>
            <Col>&copy; {currentYear} SuperKompra. All rights reserved.</Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
