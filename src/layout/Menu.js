import { Container } from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap/Navbar';
import './estilo.css'

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/"><Nav.Link>Home</Nav.Link></Link>
          <Link to="/sobre"><Nav.Link>Sobre</Nav.Link></Link>
          <Link to="/servicos"><Nav.Link>Serviços</Nav.Link></Link>
          <Link to="/portifolio"><Nav.Link>Portifólio</Nav.Link></Link>
          <Link to="/contato"><Nav.Link>Contato</Nav.Link></Link>
          </Nav>
          <Nav>
            <Nav.Link>More deets</Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;