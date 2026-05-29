import {Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/logop.png'
import { FaCartShopping, FaUser } from 'react-icons/fa6'

const Header = () => {
  return (
    <>
      <Navbar expand="md" bg="dark" data-bs-theme="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="SuperKompra" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"><FaCartShopping /> Carrito</Nav.Link>
            <Nav.Link href="#link"><FaUser /> Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
