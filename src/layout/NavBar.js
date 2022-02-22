import {
  Container,
  Button,
  Nav,
  Navbar,
} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          Users Preferences
        {/* <img
        src="../logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/AddQuestions">Add Question</Nav.Link>
          </Nav>
            <Button variant="outline-danger">Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
