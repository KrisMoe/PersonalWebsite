import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ReactComponent as EditSVG }  from '../assets/trace.svg';
// import { ReactComponent as logoSVG }  from '../assets/trace.svg';
function BasicExample() {
  return (
    <Navbar expand="lg" bg="navbar" variant="light"  fixed="top">
      <Container>
       <EditSVG className="logo"/>
        <Navbar.Brand className="brand" href="/">Kris Moe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <NavDropdown title="projects" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/projects#Ballotbot">BallotBot 5000</NavDropdown.Item>
              <NavDropdown.Item href="/projects#Let Me Cook">
                Let Me Cook
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects#Godot">Godot</NavDropdown.Item>
              <NavDropdown.Item href="/projects#Unity">
                Unity
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;