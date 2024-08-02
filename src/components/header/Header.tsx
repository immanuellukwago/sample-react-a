import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function Header() {
   return (
      <>
         <h1>ImmanuelCode</h1>
         <Navbar bg="dark" data-bs-theme="dark">
            <Container>
               <Navbar.Brand href="#">ImmanuelCode</Navbar.Brand>
               <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#languages">Languages</Nav.Link>
                  <Nav.Link href="#social">Social</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
         <hr />
      </>
   );
}

export default Header;
