import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { Link } from "react-router-dom";


const Navbarcontent = () => {
  const [open, setOpen] = useState(false)

  const handleToogle = () => {
    setOpen(!open)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top" expanded={open}>
        <Container>
          <Navbar.Brand as={Link} to="/">Kamal Sorathiya</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToogle} />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="/" className="links">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="links" onClick={handleClose}>About Me</Nav.Link>
              <Nav.Link as={Link} to="/resume" className="links" onClick={handleClose} >Resume</Nav.Link>
              <Nav.Link as={Link} to="/skills" className="links" onClick={handleClose}>Skills</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="links" onClick={handleClose}>Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  );
};

export default Navbarcontent;
