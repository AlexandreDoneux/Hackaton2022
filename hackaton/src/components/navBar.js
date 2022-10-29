import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          
          <img src="logoETChoice.png" width="200" class="d-flex flex-row"></img>
          <Nav className="me-auto" class="d-flex flex-row-reverse">
            <Nav.Link href="#home" width="200">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default NavBar;