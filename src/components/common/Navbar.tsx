import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/logo/logo.svg';

function AppNavbar() {
  return (
    <Navbar className='navbar navbar-light'  expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#"> <img
            src={logo}
            alt="Brand Logo"
            height="30"
            className="d-inline-block align-top"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <NavDropdown title="More" id="more-dropdown">
              <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">Something else</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
